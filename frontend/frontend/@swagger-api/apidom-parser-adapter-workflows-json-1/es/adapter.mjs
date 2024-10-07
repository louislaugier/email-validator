import { propOr, omit } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import { createNamespace } from '@swagger-api/apidom-core';
import { parse as parseJSON, detect as detectJSON } from '@swagger-api/apidom-parser-adapter-json';
import workflowsNamespace, { WorkflowsSpecification1Element } from '@swagger-api/apidom-ns-workflows-1';
export { default as mediaTypes } from "./media-types.mjs";
export const detectionRegExp = /"workflowsSpec"\s*:\s*"(?<version_json>1\.(?:[1-9]\d*|0)\.(?:[1-9]\d*|0))"/;
export const detect = async source => detectionRegExp.test(source) && (await detectJSON(source));
export const parse = async (source, options = {}) => {
  const refractorOpts = propOr({}, 'refractorOpts', options);
  const parserOpts = omit(['refractorOpts'], options);
  const parseResultElement = await parseJSON(source, parserOpts);
  const {
    result
  } = parseResultElement;
  if (isNotUndefined(result)) {
    const workflowsSpecificationElement = WorkflowsSpecification1Element.refract(result, refractorOpts);
    workflowsSpecificationElement.classes.push('result');
    parseResultElement.replaceResult(workflowsSpecificationElement);
  }
  return parseResultElement;
};
export const namespace = createNamespace(workflowsNamespace);