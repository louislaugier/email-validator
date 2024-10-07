// src/index.ts
import { useCallback, useState } from "react";
function useClipboard({ timeout = 2e3 } = {}) {
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);
  const onClearTimeout = useCallback(() => {
    if (copyTimeout) {
      clearTimeout(copyTimeout);
    }
  }, [copyTimeout]);
  const handleCopyResult = useCallback(
    (value) => {
      onClearTimeout();
      setCopyTimeout(setTimeout(() => setCopied(false), timeout));
      setCopied(value);
    },
    [onClearTimeout, timeout]
  );
  const copy = useCallback(
    (valueToCopy) => {
      if ("clipboard" in navigator) {
        navigator.clipboard.writeText(valueToCopy).then(() => handleCopyResult(true)).catch((err) => setError(err));
      } else {
        setError(new Error("useClipboard: navigator.clipboard is not supported"));
      }
    },
    [handleCopyResult]
  );
  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
    onClearTimeout();
  }, [onClearTimeout]);
  return { copy, reset, error, copied };
}
export {
  useClipboard
};
