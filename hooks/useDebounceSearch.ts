import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseDebounceSearchOptions {
  initialQuery?: string;
  delay?: number;
  onAfterSearch?: () => void;
}

export const useDebounceSearch = ({
  initialQuery = "",
  delay = 1000,
  onAfterSearch,
}: UseDebounceSearchOptions = {}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = null;
    }
  }, []);

  const navigateToSearch = useCallback(
    (term: string) => {
      const trimmed = term.trim();
      if (trimmed.length === 0) return;
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      onAfterSearch?.();
    },
    [router, onAfterSearch],
  );

  useEffect(() => {
    if (searchTerm === initialQuery) return;

    clearTimer();
    debounceTimer.current = setTimeout(() => {
      navigateToSearch(searchTerm);
    }, delay);

    return clearTimer;
  }, [searchTerm, delay, clearTimer, navigateToSearch, initialQuery]);

  const onSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      clearTimer();
      navigateToSearch(searchTerm);
    },
    [clearTimer, navigateToSearch, searchTerm],
  );

  return { searchTerm, setSearchTerm, onSearchSubmit };
};
