"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ramda = require("ramda");
var _apidomCore = require("@swagger-api/apidom-core");
var _apidomError = require("@swagger-api/apidom-error");
var _apidomJsonPointer = require("@swagger-api/apidom-json-pointer");
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-2");
var _MaximumDereferenceDepthError = _interopRequireDefault(require("../../../errors/MaximumDereferenceDepthError.cjs"));
var _MaximumResolveDepthError = _interopRequireDefault(require("../../../errors/MaximumResolveDepthError.cjs"));
var _util = require("../../util.cjs");
var url = _interopRequireWildcard(require("../../../util/url.cjs"));
var _index = _interopRequireDefault(require("../../../parse/index.cjs"));
var _Reference = _interopRequireDefault(require("../../../Reference.cjs"));
// @ts-ignore
const visitAsync = _apidomCore.visit[Symbol.for('nodejs.util.promisify.custom')];

// initialize element identity manager
const identityManager = new _apidomCore.IdentityManager();

// custom mutation replacer
const mutationReplacer = (newElement, oldElement, key, parent) => {
  if ((0, _apidomCore.isMemberElement)(parent)) {
    parent.value = newElement; // eslint-disable-line no-param-reassign
  } else if (Array.isArray(parent)) {
    parent[key] = newElement; // eslint-disable-line no-param-reassign
  }
};
class OpenAPI2DereferenceVisitor {
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
    ancestors = new _util.AncestorLineage(),
    refractCache = new Map()
  }) {
    this.indirections = indirections;
    this.namespace = namespace;
    this.reference = reference;
    this.options = options;
    this.ancestors = new _util.AncestorLineage(...ancestors);
    this.refractCache = refractCache;
  }
  toBaseURI(uri) {
    return url.resolve(this.reference.uri, url.sanitize(url.stripHash(uri)));
  }
  async toReference(uri) {
    // detect maximum depth of resolution
    if (this.reference.depth >= this.options.resolve.maxDepth) {
      throw new _MaximumResolveDepthError.default(`Maximum resolution depth of ${this.options.resolve.maxDepth} has been exceeded by file "${this.reference.uri}"`);
    }
    const baseURI = this.toBaseURI(uri);
    const {
      refSet
    } = this.reference;

    // we've already processed this Reference in past
    if (refSet.has(baseURI)) {
      return refSet.find((0, _ramda.propEq)(baseURI, 'uri'));
    }
    const parseResult = await (0, _index.default)(url.unsanitize(baseURI), {
      ...this.options,
      parse: {
        ...this.options.parse,
        mediaType: 'text/plain'
      }
    });

    // register new mutable reference with a refSet
    const mutableReference = new _Reference.default({
      uri: baseURI,
      value: (0, _apidomCore.cloneDeep)(parseResult),
      depth: this.reference.depth + 1
    });
    refSet.add(mutableReference);
    if (this.options.dereference.immutable) {
      // register new immutable reference with a refSet
      const immutableReference = new _Reference.default({
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
    const directAncestors = new Set(ancestors.filter(_apidomCore.isElement));
    const ancestorsLineage = new _util.AncestorLineage(...this.ancestors, directAncestors);
    return [ancestorsLineage, directAncestors];
  }
  async ReferenceElement(referencingElement, key, parent, path, ancestors, link) {
    // skip current referencing element as it's already been access
    if (this.indirections.includes(referencingElement)) {
      return false;
    }
    const [ancestorsLineage, directAncestors] = this.toAncestorLineage([...ancestors, parent]);
    const retrievalURI = this.toBaseURI((0, _apidomCore.toValue)(referencingElement.$ref));
    const isInternalReference = url.stripHash(this.reference.uri) === retrievalURI;
    const isExternalReference = !isInternalReference;

    // ignore resolving internal Reference Objects
    if (!this.options.resolve.internal && isInternalReference) {
      // skip traversing this reference element and all it's child elements
      return false;
    }
    // ignore resolving external Reference Objects
    if (!this.options.resolve.external && isExternalReference) {
      // skip traversing this reference element and all it's child elements
      return false;
    }
    const reference = await this.toReference((0, _apidomCore.toValue)(referencingElement.$ref));
    const $refBaseURI = url.resolve(retrievalURI, (0, _apidomCore.toValue)(referencingElement.$ref));
    this.indirections.push(referencingElement);
    const jsonPointer = (0, _apidomJsonPointer.uriToPointer)($refBaseURI);

    // possibly non-semantic fragment
    let referencedElement = (0, _apidomJsonPointer.evaluate)(jsonPointer, reference.value.result);
    referencedElement.id = identityManager.identify(referencedElement);

    /**
     * Applying semantics to a referenced element if semantics are missing.
     */
    if ((0, _apidomCore.isPrimitiveElement)(referencedElement)) {
      const referencedElementType = (0, _apidomCore.toValue)(referencingElement.meta.get('referenced-element'));
      const cacheKey = `${referencedElementType}-${(0, _apidomCore.toValue)(identityManager.identify(referencedElement))}`;
      if (this.refractCache.has(cacheKey)) {
        referencedElement = this.refractCache.get(cacheKey);
      } else if ((0, _apidomNsOpenapi.isReferenceLikeElement)(referencedElement)) {
        // handling indirect references
        referencedElement = _apidomNsOpenapi.ReferenceElement.refract(referencedElement);
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
      throw new _apidomError.ApiDOMError('Recursive Reference Object detected');
    }

    // detect maximum depth of dereferencing
    if (this.indirections.length > this.options.dereference.maxDepth) {
      throw new _MaximumDereferenceDepthError.default(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    }

    // detect second deep dive into the same fragment and avoid it
    if (ancestorsLineage.includes(referencedElement)) {
      reference.refSet.circular = true;
      if (this.options.dereference.circular === 'error') {
        throw new _apidomError.ApiDOMError('Circular reference detected');
      } else if (this.options.dereference.circular === 'replace') {
        var _this$options$derefer, _this$options$derefer2;
        const refElement = new _apidomCore.RefElement(referencedElement.id, {
          type: 'reference',
          uri: reference.uri,
          $ref: (0, _apidomCore.toValue)(referencingElement.$ref)
        });
        const replacer = (_this$options$derefer = (_this$options$derefer2 = this.options.dereference.strategyOpts['openapi-2']) == null ? void 0 : _this$options$derefer2.circularReplacer) != null ? _this$options$derefer : this.options.dereference.circularReplacer;
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
    if ((isExternalReference || isNonRootDocument || (0, _apidomNsOpenapi.isReferenceElement)(referencedElement) || shouldDetectCircular) && !ancestorsLineage.includesCycle(referencedElement)) {
      // append referencing reference to ancestors lineage
      directAncestors.add(referencingElement);
      const visitor = new OpenAPI2DereferenceVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: ancestorsLineage
      });
      referencedElement = await visitAsync(referencedElement, visitor, {
        keyMap: _apidomNsOpenapi.keyMap,
        nodeTypeGetter: _apidomNsOpenapi.getNodeType
      });

      // remove referencing reference from ancestors lineage
      directAncestors.delete(referencingElement);
    }
    this.indirections.pop();

    /**
     * Creating a new version of referenced element to avoid modifying the original one.
     */
    const mergedElement = (0, _apidomCore.cloneShallow)(referencedElement);
    // assign unique id to merged element
    mergedElement.setMetaProperty('id', identityManager.generateId());
    // annotate referenced element with info about original referencing element
    mergedElement.setMetaProperty('ref-fields', {
      // @ts-ignore
      $ref: (0, _apidomCore.toValue)(referencingElement.$ref)
    });
    // annotate fragment with info about origin
    mergedElement.setMetaProperty('ref-origin', reference.uri);
    // annotate fragment with info about referencing element
    mergedElement.setMetaProperty('ref-referencing-element-id', (0, _apidomCore.cloneDeep)(identityManager.identify(referencingElement)));

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
    if (!(0, _apidomCore.isStringElement)(referencingElement.$ref)) {
      return undefined;
    }

    // skip current referencing element as it's already been access
    if (this.indirections.includes(referencingElement)) {
      return false;
    }
    const [ancestorsLineage, directAncestors] = this.toAncestorLineage([...ancestors, parent]);
    const retrievalURI = this.toBaseURI((0, _apidomCore.toValue)(referencingElement.$ref));
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
    const reference = await this.toReference((0, _apidomCore.toValue)(referencingElement.$ref));
    const $refBaseURI = url.resolve(retrievalURI, (0, _apidomCore.toValue)(referencingElement.$ref));
    this.indirections.push(referencingElement);
    const jsonPointer = (0, _apidomJsonPointer.uriToPointer)($refBaseURI);

    // possibly non-semantic referenced element
    let referencedElement = (0, _apidomJsonPointer.evaluate)(jsonPointer, reference.value.result);
    referencedElement.id = identityManager.identify(referencedElement);

    /**
     * Applying semantics to a referenced element if semantics are missing.
     */
    if ((0, _apidomCore.isPrimitiveElement)(referencedElement)) {
      const cacheKey = `pathItem-${(0, _apidomCore.toValue)(identityManager.identify(referencedElement))}`;
      if (this.refractCache.has(cacheKey)) {
        referencedElement = this.refractCache.get(cacheKey);
      } else {
        referencedElement = _apidomNsOpenapi.PathItemElement.refract(referencedElement);
        this.refractCache.set(cacheKey, referencedElement);
      }
    }

    // detect direct or indirect reference
    if (referencingElement === referencedElement) {
      throw new _apidomError.ApiDOMError('Recursive Path Item Object reference detected');
    }

    // detect maximum depth of dereferencing
    if (this.indirections.length > this.options.dereference.maxDepth) {
      throw new _MaximumDereferenceDepthError.default(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    }

    // detect second deep dive into the same fragment and avoid it
    if (ancestorsLineage.includes(referencedElement)) {
      reference.refSet.circular = true;
      if (this.options.dereference.circular === 'error') {
        throw new _apidomError.ApiDOMError('Circular reference detected');
      } else if (this.options.dereference.circular === 'replace') {
        var _this$options$derefer3, _this$options$derefer4;
        const refElement = new _apidomCore.RefElement(referencedElement.id, {
          type: 'path-item',
          uri: reference.uri,
          $ref: (0, _apidomCore.toValue)(referencingElement.$ref)
        });
        const replacer = (_this$options$derefer3 = (_this$options$derefer4 = this.options.dereference.strategyOpts['openapi-2']) == null ? void 0 : _this$options$derefer4.circularReplacer) != null ? _this$options$derefer3 : this.options.dereference.circularReplacer;
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
     *  3. Fragment is a Paht Item Object with $ref field. We need to follow it to get the eventual value
     *  4. We are dereferencing the fragment lazily/eagerly depending on circular mode
     */
    const isNonRootDocument = url.stripHash(reference.refSet.rootRef.uri) !== reference.uri;
    const shouldDetectCircular = ['error', 'replace'].includes(this.options.dereference.circular);
    if ((isExternalReference || isNonRootDocument || (0, _apidomNsOpenapi.isPathItemElement)(referencedElement) && (0, _apidomCore.isStringElement)(referencedElement.$ref) || shouldDetectCircular) && !ancestorsLineage.includesCycle(referencedElement)) {
      // append referencing reference to ancestors lineage
      directAncestors.add(referencingElement);
      const visitor = new OpenAPI2DereferenceVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: ancestorsLineage
      });
      referencedElement = await visitAsync(referencedElement, visitor, {
        keyMap: _apidomNsOpenapi.keyMap,
        nodeTypeGetter: _apidomNsOpenapi.getNodeType
      });

      // remove referencing reference from ancestors lineage
      directAncestors.delete(referencingElement);
    }
    this.indirections.pop();

    // merge fields from referenced Path Item with referencing one
    if ((0, _apidomNsOpenapi.isPathItemElement)(referencedElement)) {
      const mergedElement = new _apidomNsOpenapi.PathItemElement([...referencedElement.content], (0, _apidomCore.cloneDeep)(referencedElement.meta), (0, _apidomCore.cloneDeep)(referencedElement.attributes));
      // assign unique id to merged element
      mergedElement.setMetaProperty('id', identityManager.generateId());
      // existing keywords from referencing PathItemElement overrides ones from referenced element
      referencingElement.forEach((value, keyElement, item) => {
        mergedElement.remove((0, _apidomCore.toValue)(keyElement));
        mergedElement.content.push(item);
      });
      mergedElement.remove('$ref');

      // annotate referenced element with info about original referencing element
      mergedElement.setMetaProperty('ref-fields', {
        $ref: (0, _apidomCore.toValue)(referencingElement.$ref)
      });
      // annotate referenced element with info about origin
      mergedElement.setMetaProperty('ref-origin', reference.uri);
      // annotate fragment with info about referencing element
      mergedElement.setMetaProperty('ref-referencing-element-id', (0, _apidomCore.cloneDeep)(identityManager.identify(referencingElement)));
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
  async JSONReferenceElement(referencingElement, key, parent, path, ancestors, link) {
    // skip current referencing element as it's already been access
    if (this.indirections.includes(referencingElement)) {
      return false;
    }
    const [ancestorsLineage, directAncestors] = this.toAncestorLineage([...ancestors, parent]);
    const retrievalURI = this.toBaseURI((0, _apidomCore.toValue)(referencingElement.$ref));
    const isInternalReference = url.stripHash(this.reference.uri) === retrievalURI;
    const isExternalReference = !isInternalReference;

    // ignore resolving internal JSONReference Objects
    if (!this.options.resolve.internal && isInternalReference) {
      // skip traversing this JSONReference element and all it's child elements
      return false;
    }
    // ignore resolving external JSONReference Objects
    if (!this.options.resolve.external && isExternalReference) {
      // skip traversing this JSONReference element and all it's child elements
      return false;
    }
    const reference = await this.toReference((0, _apidomCore.toValue)(referencingElement.$ref));
    const $refBaseURI = url.resolve(retrievalURI, (0, _apidomCore.toValue)(referencingElement.$ref));
    this.indirections.push(referencingElement);
    const jsonPointer = (0, _apidomJsonPointer.uriToPointer)($refBaseURI);

    // possibly non-semantic fragment
    let referencedElement = (0, _apidomJsonPointer.evaluate)(jsonPointer, reference.value.result);
    referencedElement.id = identityManager.identify(referencedElement);

    /**
     * Applying semantics to a referenced element if semantics are missing.
     */
    if ((0, _apidomCore.isPrimitiveElement)(referencedElement)) {
      const referencedElementType = (0, _apidomCore.toValue)(referencingElement.meta.get('referenced-element'));
      const cacheKey = `path-item-${(0, _apidomCore.toValue)(identityManager.identify(referencedElement))}`;
      if (this.refractCache.has(cacheKey)) {
        referencedElement = this.refractCache.get(cacheKey);
      } else if ((0, _apidomNsOpenapi.isJSONReferenceLikeElement)(referencedElement)) {
        // handling indirect references
        referencedElement = _apidomNsOpenapi.ReferenceElement.refract(referencedElement);
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
      throw new _apidomError.ApiDOMError('Recursive Reference Object detected');
    }

    // detect maximum depth of dereferencing
    if (this.indirections.length > this.options.dereference.maxDepth) {
      throw new _MaximumDereferenceDepthError.default(`Maximum dereference depth of "${this.options.dereference.maxDepth}" has been exceeded in file "${this.reference.uri}"`);
    }

    // detect second deep dive into the same fragment and avoid it
    if (ancestorsLineage.includes(referencedElement)) {
      reference.refSet.circular = true;
      if (this.options.dereference.circular === 'error') {
        throw new _apidomError.ApiDOMError('Circular reference detected');
      } else if (this.options.dereference.circular === 'replace') {
        var _this$options$derefer5, _this$options$derefer6;
        const refElement = new _apidomCore.RefElement(referencedElement.id, {
          type: 'json-reference',
          uri: reference.uri,
          $ref: (0, _apidomCore.toValue)(referencingElement.$ref)
        });
        const replacer = (_this$options$derefer5 = (_this$options$derefer6 = this.options.dereference.strategyOpts['openapi-2']) == null ? void 0 : _this$options$derefer6.circularReplacer) != null ? _this$options$derefer5 : this.options.dereference.circularReplacer;
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
     2. Fragment is from non-root document
     *  3. Fragment is a JSON Reference Object. We need to follow it to get the eventual value
     *  4. We are dereferencing the fragment lazily/eagerly depending on circular mode
     */
    const isNonRootDocument = url.stripHash(reference.refSet.rootRef.uri) !== reference.uri;
    const shouldDetectCircular = ['error', 'replace'].includes(this.options.dereference.circular);
    if ((isExternalReference || isNonRootDocument || (0, _apidomNsOpenapi.isJSONReferenceElement)(referencedElement) || shouldDetectCircular) && !ancestorsLineage.includesCycle(referencedElement)) {
      // append referencing reference to ancestors lineage
      directAncestors.add(referencingElement);
      const visitor = new OpenAPI2DereferenceVisitor({
        reference,
        namespace: this.namespace,
        indirections: [...this.indirections],
        options: this.options,
        refractCache: this.refractCache,
        ancestors: ancestorsLineage
      });
      referencedElement = await visitAsync(referencedElement, visitor, {
        keyMap: _apidomNsOpenapi.keyMap,
        nodeTypeGetter: _apidomNsOpenapi.getNodeType
      });

      // remove referencing reference from ancestors lineage
      directAncestors.delete(referencingElement);
    }
    this.indirections.pop();

    /**
     * Creating a new version of referenced element to avoid modifying the original one.
     */
    const mergedElement = (0, _apidomCore.cloneShallow)(referencedElement);
    // assign unique id to merged element
    mergedElement.setMetaProperty('id', identityManager.generateId());
    // annotate referenced element with info about original referencing element
    mergedElement.setMetaProperty('ref-fields', {
      // @ts-ignore
      $ref: (0, _apidomCore.toValue)(referencingElement.$ref)
    });
    // annotate fragment with info about origin
    mergedElement.setMetaProperty('ref-origin', reference.uri);
    // annotate fragment with info about referencing element
    mergedElement.setMetaProperty('ref-referencing-element-id', (0, _apidomCore.cloneDeep)(identityManager.identify(referencingElement)));

    /**
     * Transclude referencing element with merged referenced element.
     */
    link.replaceWith(mergedElement, mutationReplacer);

    /**
     * We're at the root of the tree, so we're just replacing the entire tree.
     */
    return !parent ? mergedElement : false;
  }
}
var _default = exports.default = OpenAPI2DereferenceVisitor;