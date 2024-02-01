import axios from 'axios';
import type { Repository, SearchResponse, User } from '../types/github';

const BASE_URL = 'https://api.github.com';

export const githubApi = {
  searchRepositories: async (query: string, page: number = 1): Promise<SearchResponse> => {
    const response = await axios.get(`${BASE_URL}/search/repositories`, {
      params: {
        q: query,
        page,
        per_page: 10,
        sort: 'stars',
        order: 'desc',
      },
    });
    return response.data;
  },

  getUser: async (username: string): Promise<User> => {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  },

  getUserRepositories: async (username: string, page: number = 1): Promise<Repository[]> => {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`, {
      params: {
        page,
        per_page: 10,
        sort: 'updated',
      },
    });
    return response.data;
  },
}; 