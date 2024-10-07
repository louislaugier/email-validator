import { propEq } from 'ramda';
import { isUndefined } from 'ramda-adjunct';
import { isPrimitiveElement, isStringElement, isMemberElement, isElement, IdentityManager, visit, find, cloneShallow, cloneDeep, toValue, RefElement } from '@swagger-api/apidom-core';
import { ApiDOMError } from '@swagger-api/apidom-error';
import { evaluate, uriToPointer } from '@swagger-api/apidom-json-pointer';
import { getNodeType, keyMap, ReferenceElement, OperationElement, PathItemElement, isReferenceElement, isOperationElement, isPathItemElement, isReferenceLikeElement } from '@swagger-api/apidom-ns-openapi-3-0';
import MaximumDereferenceDepthError from "../../../errors/MaximumDereferenceDepthError.mjs";
import MaximumResolveDepthError from "../../../errors/MaximumResolveDepthError.mjs";
import * as url from "../../../util/url.mjs";
import parse from "../../../parse/index.mjs";
import Reference from "../../../Reference.mjs";
import { AncestorLineage } from "../../util.mjs";
// @ts-ignore
const visitAsync = visit[Symbol.for('nodejs.util.promisify.custom')];

// initialize element identity manager
const identityManager = new IdentityManager();

// custom mutation replacer
const mutationReplacer = (newElement, oldElement, key, parent) => {
  if (isMemberElement(parent)) {
    parent.value = newElement; // eslint-disable-line no-param-reassign
  } else if (Array.isArray(parent)) {
    parent[key] = newElement; // eslint-disable-line no-param-reassign
  }
};
class OpenAPI3_0DereferenceVisitor {
  indirections;
  namespace;
  reference;
  options;
  ancestors;
  refractCache;
  constructor({
    reference,
    namespace,
    options,
    indirections = [],
    ancestors = new AncestorLineage(),
    refractCache = new Map()
  }) {
    this.indirections = indirections;
    this.namespace = namespace;
    this.reference = reference;
    this.options = options;
    this.ancestors = new AncestorLineage(...ancestors);
    this.refractCache = refractCache;
  }
  toBaseURI(uri) {
    return url.resolve(this.reference.uri, url.sanitize(url.stripHash(uri)));
  }
  async toReference(uri) {
    // detect maximum depth of resolution
    if (this.reference.depth >= this.options.resolve.maxDepth) {
      throw new MaximumResolveDepthError(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    }
    const baseURI = this.toBaseURI(uri);
    const {
      refSet
    } = this.reference;

    // we've already processed this Reference in past
    if (refSet.has(baseURI)) {
      return refSet.find(propEq(baseURI, 'uri'));
    }
    const parseResult = await parse(url.unsanitize(baseURI), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: 'text/plain'
      }
    });

    // register new mutable reference with a refSet
    const mutableReference = new Reference({
      uri: baseURI,
      value: cloneDeep(parseResult),
      depth: this.reference.depth + 1
    });
    refSet.add(mutableReference);
    if (this.options.dereference.immutable) {
      // register new immutable reference with a refSet
      const immutableReference = new Reference({
        uri: `immutable://${baseURI}`,
        value: parseResult,
        depth: this.reference.depth + 1
      });
      refSet.add(immutableReference);
    }
    return mutableReference;
  }
  toAncestorLineage(ancestors) {
    /**
     * Compute full ancestors lineage.
     * Ancestors are flatten to unwrap all Element instances.
     */
    const directAncestors = new Set(ancestors.filter(isElement));
    const ancestorsLineage = new AncestorLineage(...this.ancestors, directAncestors);
    return [ancestorsLineage, directAncestors];
  }
  async ReferenceElement(referencingElement, key, parent, path, ancestors, link) {
    // skip current referencing element as it's already been access
    if (this.indirections.includes(referencingElement)) {
      return false;
    }
    const [ancestorsLineage, directAncestors] = this.toAncestorLineage([...ancestors, parent]);
    const retrievalURI = this.toBaseURI(toValue(referencingElement.$ref));
    const isInternalReference = url.stripHash(this.reference.uri) === retrievalURI;
    const isExternalReference = !isInternalReference;

    // ignore resolving internal Reference Objects
    if (!this.options.resolve.internal && isInternalReference) {
      // skip traversing this reference element
      return false;
    }
    // ignore resolving external Reference Objects
    if (!this.options.resolve.external && isExternalReference) {
      // skip traversing this reference element
      return false;
    }
    const reference = await this.toReference(toValue(referencingElement.$ref));
    const $refBaseURI = url.resolve(retrievalURI, toValue(referencingElement.$ref));
    this.indirections.push(referencingElement);
    const jsonPointer = uriToPointer($refBaseURI);

    // possibly non-semantic fragment
    let referencedElement = evaluate(jsonPointer, reference.value.result);
    referencedElement.id = identityManager.identify(referencedElement);

    /**
     * Applying semantics to a referenced element if semantics are missing.
     */
    if (isPrimitiveElement(referencedElement)) {
      const referencedElementType = toValue(referencingElement.meta.get('referenced-element'));
      const cacheKey = `${referencedElementType}-${toValue(identityManager.identify(referencedElement))}`;
      if (this.refractCache.has(cacheKey)) {
        referencedElement = this.refractCache.get(cacheKey);
      } else if (isReferenceLikeElement(referencedElement)) {
        // handling indirect references
        referencedElement = ReferenceElement.refract(referencedElement);
        referencedElement.setMetaProperty('referenced-element', referencedElementType);
        this.refractCache.set(cacheKey, referencedElement);
      } else {
        // handling direct references
        const ElementClass = this.namespace.getElementClass(referencedElementType);
        referencedElement = ElementClass.refract(referencedElement);
        this.refractCache.set(cacheKey, referencedElement);
      }
    }

    // detect direct or circular reference
    if (referencingElement === referencedElement) {
      throw new ApiDOMError('Recursive Reference Object detected');
    }

    // detect maximum depth of dereferencing
    if (this.indirections.length > this.options.dereference.maxDepth) {
      throw new MaximumDereferenceDepthError(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    }

    // detect second deep dive into the same fragment and avoid it
    if (ancestorsLineage.includes(referencedElement)) {
      reference.refSet.circular = true;
      if (this.options.dereference.circular === 'error') {
        throw new ApiDOMError('Circular reference detected');
      } else if (this.options.dereference.circular === 'replace') {
        var _this$options$derefer, _this$options$derefer2;
        const refElement = new RefElement(referencedElement.id, {
          type: 'reference',
          uri: reference.uri,
          $ref: toValue(referencingElement.$ref)
        });
        const replacer = (_this$options$derefer = (_this$options$derefer2 = this.options.dereference.strategyOpts['openapi-3-0']) === null || _this$options$derefer2 === void 0 ? void 0 : _this$options$derefer2.circularReplacer) !== null && _this$options$derefer !== void 0 ? _this$options$derefer : this.options.dereference.circularReplacer;
        const replacement = replacer(refElement);
        link.replaceWith(replacement, mutationReplacer);
        return !parent ? replacement : false;
      }
    }

    /**
     * Dive deep into the fragment.
     *
     * Cases to consider:
     *  1. We're crossing document boundary
     *  2. Fragment is from non-root document
     *  3. Fragment is a Reference Object. We need to follow it to get the eventual value
     *  4. We are dereferencing the fragment lazily/eagerly depending on circular mode
     */
    const isNonRootDocument = url.stripHash(reference.refSet.rootRef.uri) !== reference.uri;
    const shouldDetectCircular = ['error', 'replace'].includes(this.options.dereference.circular);
    if ((isExternalReference || isNonRootDocument || isReferenceElement(referencedElement) || shouldDetectCircular) && !ancestorsLineage.includesCycle(referencedElement)) {
      // append referencing reference to ancestors lineage
      directAncestors.add(referencingElement);
      const visitor = new OpenAPI3_0DereferenceVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: ancestorsLineage
      });
      referencedElement = await visitAsync(referencedElement, visitor, {
        keyMap,
        nodeTypeGetter: getNodeType
      });

      // remove referencing reference from ancestors lineage
      directAncestors.delete(referencingElement);
    }
    this.indirections.pop();

    /**
     * Creating a new version of referenced element to avoid modifying the original one.
     */
    const mergedElement = cloneShallow(referencedElement);
    // assign unique id to merged element
    mergedElement.setMetaProperty('id', identityManager.generateId());
    // annotate referenced element with info about original referencing element
    mergedElement.setMetaProperty('ref-fields', {
      $ref: toValue(referencingElement.$ref)
    });
    // annotate fragment with info about origin
    mergedElement.setMetaProperty('ref-origin', reference.uri);
    // annotate fragment with info about referencing element
    mergedElement.setMetaProperty('ref-referencing-element-id', cloneDeep(identityManager.identify(referencingElement)));

    /**
     * Transclude referencing element with merged referenced element.
     */
    link.replaceWith(mergedElement, mutationReplacer);

    /**
     * We're at the root of the tree, so we're just replacing the entire tree.
     */
    return !parent ? mergedElement : false;
  }
  async PathItemElement(referencingElement, key, parent, path, ancestors, link) {
    // ignore PathItemElement without $ref field
    if (!isStringElement(referencingElement.$ref)) {
      return undefined;
    }

    // skip current referencing element as it's already been access
    if (this.indirections.includes(referencingElement)) {
      return false;
    }
    const [ancestorsLineage, directAncestors] = this.toAncestorLineage([...ancestors, parent]);
    const retrievalURI = this.toBaseURI(toValue(referencingElement.$ref));
    const isInternalReference = url.stripHash(this.reference.uri) === retrievalURI;
    const isExternalReference = !isInternalReference;

    // ignore resolving internal Path Item Objects
    if (!this.options.resolve.internal && isInternalReference) {
      // skip traversing this Path Item element but traverse all it's child elements
      return undefined;
    }
    // ignore resolving external Path Item Objects
    if (!this.options.resolve.external && isExternalReference) {
      // skip traversing this Path Item element but traverse all it's child elements
      return undefined;
    }
    const reference = await this.toReference(toValue(referencingElement.$ref));
    const $refBaseURI = url.resolve(retrievalURI, toValue(referencingElement.$ref));
    this.indirections.push(referencingElement);
    const jsonPointer = uriToPointer($refBaseURI);

    // possibly non-semantic referenced element
    let referencedElement = evaluate(jsonPointer, reference.value.result);
    referencedElement.id = identityManager.identify(referencedElement);

    /**
     * Applying semantics to a referenced element if semantics are missing.
     */
    if (!isPathItemElement(referencedElement)) {
      const cacheKey = `path-item-${toValue(identityManager.identify(referencedElement))}`;
      if (this.refractCache.has(cacheKey)) {
        referencedElement = this.refractCache.get(cacheKey);
      } else {
        referencedElement = PathItemElement.refract(referencedElement);
        this.refractCache.set(cacheKey, referencedElement);
      }
    }

    // detect direct or circular reference
    if (referencingElement === referencedElement) {
      throw new ApiDOMError('Recursive Path Item Object reference detected');
    }

    // detect maximum depth of dereferencing
    if (this.indirections.length > this.options.dereference.maxDepth) {
      throw new MaximumDereferenceDepthError(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    }

    // detect second deep dive into the same fragment and avoid it
    if (ancestorsLineage.includes(referencedElement)) {
      reference.refSet.circular = true;
      if (this.options.dereference.circular === 'error') {
        throw new ApiDOMError('Circular reference detected');
      } else if (this.options.dereference.circular === 'replace') {
        var _this$options$derefer3, _this$options$derefer4;
        const refElement = new RefElement(referencedElement.id, {
          type: 'path-item',
          uri: reference.uri,
          $ref: toValue(referencingElement.$ref)
        });
        const replacer = (_this$options$derefer3 = (_this$options$derefer4 = this.options.dereference.strategyOpts['openapi-3-0']) === null || _this$options$derefer4 === void 0 ? void 0 : _this$options$derefer4.circularReplacer) !== null && _this$options$derefer3 !== void 0 ? _this$options$derefer3 : this.options.dereference.circularReplacer;
        const replacement = replacer(refElement);
        link.replaceWith(replacement, mutationReplacer);
        return !parent ? replacement : undefined;
      }
    }

    /**
     * Dive deep into the fragment.
     *
     * Cases to consider:
     *  1. We're crossing document boundary
     *  2. Fragment is from non-root document
     *  3. Fragment is a Path Item Object with $ref field. We need to follow it to get the eventual value
     *  4. We are dereferencing the fragment lazily/eagerly depending on circular mode
     */
    const isNonRootDocument = url.stripHash(reference.refSet.rootRef.uri) !== reference.uri;
    const shouldDetectCircular = ['error', 'replace'].includes(this.options.dereference.circular);
    if ((isExternalReference || isNonRootDocument || isPathItemElement(referencedElement) && isStringElement(referencedElement.$ref) || shouldDetectCircular) && !ancestorsLineage.includesCycle(referencedElement)) {
      // append referencing reference to ancestors lineage
      directAncestors.add(referencingElement);
      const visitor = new OpenAPI3_0DereferenceVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: ancestorsLineage
      });
      referencedElement = await visitAsync(referencedElement, visitor, {
        keyMap,
        nodeTypeGetter: getNodeType
      });

      // remove referencing reference from ancestors lineage
      directAncestors.delete(referencingElement);
    }
    this.indirections.pop();

    /**
     * Creating a new version of Path Item by merging fields from referenced Path Item with referencing one.
     */
    if (isPathItemElement(referencedElement)) {
      const mergedElement = new PathItemElement([...referencedElement.content], cloneDeep(referencedElement.meta), cloneDeep(referencedElement.attributes));
      // assign unique id to merged element
      mergedElement.setMetaProperty('id', identityManager.generateId());
      // existing keywords from referencing PathItemElement overrides ones from referenced element
      referencingElement.forEach((value, keyElement, item) => {
        mergedElement.remove(toValue(keyElement));
        mergedElement.content.push(item);
      });
      mergedElement.remove('$ref');

      // annotate referenced element with info about original referencing element
      mergedElement.setMetaProperty('ref-fields', {
        $ref: toValue(referencingElement.$ref)
      });
      // annotate referenced element with info about origin
      mergedElement.setMetaProperty('ref-origin', reference.uri);
      // annotate fragment with info about referencing element
      mergedElement.setMetaProperty('ref-referencing-element-id', cloneDeep(identityManager.identify(referencingElement)));
      referencedElement = mergedElement;
    }

    /**
     * Transclude referencing element with merged referenced element.
     */
    link.replaceWith(referencedElement, mutationReplacer);

    /**
     * We're at the root of the tree, so we're just replacing the entire tree.
     */
    return !parent ? referencedElement : undefined;
  }
  async LinkElement(linkElement, key, parent, path, ancestors, link) {
    // ignore LinkElement without operationRef or operationId field
    if (!isStringElement(linkElement.operationRef) && !isStringElement(linkElement.operationId)) {
      return undefined;
    }

    // operationRef and operationId fields are mutually exclusive
    if (isStringElement(linkElement.operationRef) && isStringElement(linkElement.operationId)) {
      throw new ApiDOMError('LinkElement operationRef and operationId fields are mutually exclusive.');
    }
    let operationElement;
    if (isStringElement(linkElement.operationRef)) {
      var _linkElementCopy$oper;
      // possibly non-semantic referenced element
      const jsonPointer = uriToPointer(toValue(linkElement.operationRef));
      const retrievalURI = this.toBaseURI(toValue(linkElement.operationRef));
      const isInternalReference = url.stripHash(this.reference.uri) === retrievalURI;
      const isExternalReference = !isInternalReference;

      // ignore resolving internal Operation Object reference
      if (!this.options.resolve.internal && isInternalReference) {
        // skip traversing this Link element but traverse all it's child elements
        return undefined;
      }
      // ignore resolving external Operation Object reference
      if (!this.options.resolve.external && isExternalReference) {
        // skip traversing this Link element but traverse all it's child elements
        return undefined;
      }
      const reference = await this.toReference(toValue(linkElement.operationRef));
      operationElement = evaluate(jsonPointer, reference.value.result);
      // applying semantics to a referenced element
      if (isPrimitiveElement(operationElement)) {
        const cacheKey = `operation-${toValue(identityManager.identify(operationElement))}`;
        if (this.refractCache.has(cacheKey)) {
          operationElement = this.refractCache.get(cacheKey);
        } else {
          operationElement = OperationElement.refract(operationElement);
          this.refractCache.set(cacheKey, operationElement);
        }
      }
      // create shallow clone to be able to annotate with metadata
      operationElement = cloneShallow(operationElement);
      // annotate operation element with info about origin
      operationElement.setMetaProperty('ref-origin', reference.uri);
      const linkElementCopy = cloneShallow(linkElement);
      (_linkElementCopy$oper = linkElementCopy.operationRef) === null || _linkElementCopy$oper === void 0 || _linkElementCopy$oper.meta.set('operation', operationElement);

      /**
       * Transclude Link Object containing Operation Object in its meta.
       */
      link.replaceWith(linkElementCopy, mutationReplacer);

      /**
       * We're at the root of the tree, so we're just replacing the entire tree.
       */
      return !parent ? linkElementCopy : undefined;
    }
    if (isStringElement(linkElement.operationId)) {
      var _linkElementCopy$oper2;
      const operationId = toValue(linkElement.operationId);
      const reference = await this.toReference(url.unsanitize(this.reference.uri));
      operationElement = find(e => isOperationElement(e) && isElement(e.operationId) && e.operationId.equals(operationId), reference.value.result);
      // OperationElement not found by its operationId
      if (isUndefined(operationElement)) {
        throw new ApiDOMError(`OperationElement(operationId=${operationId}) not found.`);
      }
      const linkElementCopy = cloneShallow(linkElement);
      (_linkElementCopy$oper2 = linkElementCopy.operationId) === null || _linkElementCopy$oper2 === void 0 || _linkElementCopy$oper2.meta.set('operation', operationElement);

      /**
       * Transclude Link Object containing Operation Object in its meta.
       */
      link.replaceWith(linkElementCopy, mutationReplacer);

      /**
       * We're at the root of the tree, so we're just replacing the entire tree.
       */
      return !parent ? linkElementCopy : undefined;
    }
    return undefined;
  }
  async ExampleElement(exampleElement, key, parent, path, ancestors, link) {
    // ignore ExampleElement without externalValue field
    if (!isStringElement(exampleElement.externalValue)) {
      return undefined;
    }

    // value and externalValue fields are mutually exclusive
    if (exampleElement.hasKey('value') && isStringElement(exampleElement.externalValue)) {
      throw new ApiDOMError('ExampleElement value and externalValue fields are mutually exclusive.');
    }
    const retrievalURI = this.toBaseURI(toValue(exampleElement.externalValue));
    const isInternalReference = url.stripHash(this.reference.uri) === retrievalURI;
    const isExternalReference = !isInternalReference;

    // ignore resolving external Example Objects
    if (!this.options.resolve.internal && isInternalReference) {
      // skip traversing this Example element but traverse all it's child elements
      return undefined;
    }
    // ignore resolving external Example Objects
    if (!this.options.resolve.external && isExternalReference) {
      // skip traversing this Example element but traverse all it's child elements
      return undefined;
    }
    const reference = await this.toReference(toValue(exampleElement.externalValue));

    // shallow clone of the referenced element
    const valueElement = cloneShallow(reference.value.result);
    // annotate operation element with info about origin
    valueElement.setMetaProperty('ref-origin', reference.uri);
    const exampleElementCopy = cloneShallow(exampleElement);
    exampleElementCopy.value = valueElement;

    /**
     * Transclude Example Object containing external value.
     */
    link.replaceWith(exampleElementCopy, mutationReplacer);

    /**
     * We're at the root of the tree, so we're just replacing the entire tree.
     */
    return !parent ? exampleElementCopy : undefined;
  }
}
export default OpenAPI3_0DereferenceVisitor;