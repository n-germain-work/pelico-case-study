import axios, { AxiosError } from 'axios';
import { Repository } from '../libs/model';

const GITHUB_API_BASE_URL = 'https://api.github.com/search/repositories';

export const searchRepositories = async (query: string): Promise<Repository[]> => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}?q=${query}`);
    return response.data.items;
  } catch (_error: unknown) {
    const error = _error as AxiosError;
    throw new Error(`Error fetching repositories from GitHub API with following message : ${error.message}`);
  }
};
