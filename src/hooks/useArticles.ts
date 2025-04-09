import { Period } from '../types/article';
import { fetchArticles } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const articleKeys = {
  all: ['articles'] as const,
  lists: () => [...articleKeys.all, 'list'] as const,
  list: (period: Period) => [...articleKeys.lists(), period] as const,
};

export const useArticles = (period: Period) => {
  return useQuery({
    queryKey: articleKeys.list(period),
    queryFn: () => fetchArticles(period),
  });
};
