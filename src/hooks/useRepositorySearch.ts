import { useState, useCallback } from 'react';
import type { Repository } from '../types/github';
import { githubApi } from '../services/github';

export const useRepositorySearch = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const searchRepositories = useCallback(async (query: string, page: number = 1) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await githubApi.searchRepositories(query, page);
      setRepositories(response.items);
      setTotalCount(response.total_count);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching repositories');
      setRepositories([]);
      setTotalCount(0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadMore = useCallback(async (query: string) => {
    const nextPage = currentPage + 1;
    try {
      setIsLoading(true);
      const response = await githubApi.searchRepositories(query, nextPage);
      setRepositories((prev) => [...prev, ...response.items]);
      setCurrentPage(nextPage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while loading more repositories');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  return {
    repositories,
    isLoading,
    error,
    totalCount,
    currentPage,
    searchRepositories,
    loadMore,
  };
}; 