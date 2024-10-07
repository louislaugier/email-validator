import { identifiers, utilities } from 'apg-lite';
const serverVariableName = (state, chars, phraseIndex, phraseLength, data) => {
  if (state === identifiers.SEM_PRE) {
    if (Array.isArray(data) === false) {
      throw new Error("parser's user data must be an array");
    }
    data.push(['server-variable-name', utilities.charsToString(chars, phraseIndex, phraseLength)]);
  }
  return identifiers.SEM_OK;
};
export default serverVariableName;