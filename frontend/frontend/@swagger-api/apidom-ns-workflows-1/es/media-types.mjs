import { last } from 'ramda';
import { MediaTypes } from '@swagger-api/apidom-core';
export class WorkflowsMediaTypes extends MediaTypes {
  filterByFormat(format = 'generic') {
    const effectiveFormat = format === 'generic' ? 'workflows;version' : format;
    return this.filter(mediaType => mediaType.includes(effectiveFormat));
  }
  findBy(version = '1.0.0', format = 'generic') {
    const search = format === 'generic' ? `vnd.oai.workflows;version=${version}` : `vnd.oai.workflows+${format};version=${version}`;
    const found = this.find(mediaType => mediaType.includes(search));
    return found || this.unknownMediaType;
  }
  latest(format = 'generic') {
    return last(this.filterByFormat(format));
  }
}
const mediaTypes = new WorkflowsMediaTypes('application/vnd.oai.workflows;version=1.0.0', 'application/vnd.oai.workflows+json;version=1.0.0', 'application/vnd.oai.workflows+yaml;version=1.0.0');
export default mediaTypes;