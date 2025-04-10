import { Period } from '../types/article';
import { fetchArticles } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export function useArticles(period: Period) {
  return useQuery({
    queryKey: ['articles', period],
    queryFn: () => fetchArticles(period),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
}
