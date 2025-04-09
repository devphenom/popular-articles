import { ArticleResponse, Period } from '../types/article';

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_NYT_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

if (!API_BASE_URL) {
  throw new Error('NYT API BaseURL  is required. Please set VITE_NYT_API_BASE_URL in your environment variables.');
}

if (!API_KEY) {
  throw new Error('NYT API key is required. Please set VITE_NYT_API_KEY in your environment variables.');
}

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    'api-key': API_KEY,
  },
});

export const fetchArticles = async (period: Period): Promise<ArticleResponse> => {
  try {
    const response = await api.get<ArticleResponse>(`/viewed/${period}.json`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch articles: ${error.message}`);
    }
    throw error;
  }
};
