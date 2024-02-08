import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { RepositoryList } from '../components/RepositoryList';
import { useRepositorySearch } from '../hooks/useRepositorySearch';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    repositories,
    isLoading,
    error,
    totalCount,
    searchRepositories,
    loadMore,
  } = useRepositorySearch();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchRepositories(query);
  };

  const handleLoadMore = () => {
    if (searchQuery) {
      loadMore(searchQuery);
    }
  };

  return (
    <div className="space-y-8">
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      
      {error && (
        <div className="text-center py-4">
          <p className="text-red-500 dark:text-red-400">{error}</p>
        </div>
      )}

      <RepositoryList repositories={repositories} isLoading={isLoading} />

      {repositories.length > 0 && repositories.length < totalCount && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}; 