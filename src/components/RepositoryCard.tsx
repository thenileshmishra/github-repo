import type { Repository } from '../types/github';
import { FiStar, FiGitBranch, FiCode } from 'react-icons/fi';

interface RepositoryCardProps {
  repository: Repository;
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {repository.name}
            </a>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {repository.description || 'No description available'}
          </p>
        </div>
        <img
          src={repository.owner.avatar_url}
          alt={`${repository.owner.login}'s avatar`}
          className="w-10 h-10 rounded-full ml-4"
        />
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center">
          <FiStar className="w-4 h-4 mr-1" />
          <span>{repository.stargazers_count.toLocaleString()}</span>
        </div>
        <div className="flex items-center">
          <FiGitBranch className="w-4 h-4 mr-1" />
          <span>{repository.forks_count.toLocaleString()}</span>
        </div>
        {repository.language && (
          <div className="flex items-center">
            <FiCode className="w-4 h-4 mr-1" />
            <span>{repository.language}</span>
          </div>
        )}
      </div>
    </div>
  );
}; 