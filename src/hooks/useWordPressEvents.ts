
import { useQuery } from '@tanstack/react-query';
import wordpressApi from '@/services/wordpressApi';

export const useWordPressEvents = (params: {
  page?: number;
  per_page?: number;
  search?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-events', params],
    queryFn: () => wordpressApi.getPosts({ ...params, categories: [1] }), // Assuming events category ID is 1
  });
};

export const useWordPressEvent = (identifier: number | string) => {
  return useQuery({
    queryKey: ['wp-event', identifier],
    queryFn: () => wordpressApi.getPost(identifier),
    enabled: !!identifier,
  });
};
