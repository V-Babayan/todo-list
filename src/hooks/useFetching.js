import { useCallback, useState, useMemo } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = useCallback(
    async (...args) => {
      setIsLoading(true);
      try {
        await callback(...args);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [callback]
  );

  const result = useMemo(() => [fetching, isLoading, error], [fetching, isLoading, error]);

  return result;
};
