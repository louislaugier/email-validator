import { readFile } from '#fs'; // eslint-disable-line import/order
import { promisify } from '#util'; // eslint-disable-line import/order
import minimatch from 'minimatch';
import Resolver from "../Resolver.mjs";
import * as url from "../../../util/url.mjs";
import ResolverError from "../../../errors/ResolverError.mjs";
class FileResolver extends Resolver {
  fileAllowList;
  constructor(options) {
    const {
      fileAllowList = []
    } = options !== null && options !== void 0 ? options : {};
    super({
      name: 'file'
    });
    this.fileAllowList = fileAllowList;
  }
  canRead(file) {
    return url.isFileSystemPath(file.uri) && this.fileAllowList.some(pattern => {
      return typeof pattern === 'string' ? minimatch(file.uri, pattern, {
        matchBase: true
      }) : pattern.test(file.uri);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async read(file) {
    const fileSystemPath = url.toFileSystemPath(file.uri);
    try {
      return await promisify(readFile)(fileSystemPath);
    } catch (error) {
      throw new ResolverError(`Error opening file "${file.uri}"`, {
        cause: error
      });
    }
  }
}
export default FileResolver;