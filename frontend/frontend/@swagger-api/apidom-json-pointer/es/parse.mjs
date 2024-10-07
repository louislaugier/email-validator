import { map, pipe, split, startsWith, tail } from 'ramda';
import { isEmptyString, trimCharsStart } from 'ramda-adjunct';
import unescape from "./unescape.mjs";
import InvalidJsonPointerError from "./errors/InvalidJsonPointerError.mjs"; // parse :: String -> String[]
const parse = pointer => {
  if (isEmptyString(pointer)) {
    return [];
  }
  if (!startsWith('/', pointer)) {
    throw new InvalidJsonPointerError(`Invalid JSON Pointer "${pointer}". JSON Pointers must begin with "/"`, {
      pointer
    });
  }
  try {
    const tokens = pipe(split('/'), map(unescape))(pointer);
    return tail(tokens);
  } catch (error) {
    throw new InvalidJsonPointerError(`JSON Pointer parsing of "${pointer}" encountered an error.`, {
      pointer,
      cause: error
    });
  }
};

/**
 * Returns the hash (URL fragment), of the given path.
 * If there is no hash, then the root hash ("#") is returned.
 */
const getHash = uri => {
  const hashIndex = uri.indexOf('#');
  if (hashIndex !== -1) {
    return uri.substring(hashIndex);
  }
  return '#';
};

// uriToPointer :: String -> String
export const uriToPointer = uri => {
  const hash = getHash(uri);
  return trimCharsStart('#', hash);
};
export default parse;