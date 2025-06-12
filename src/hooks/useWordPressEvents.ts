
import { useQuery } from '@tanstack/react-query';
import wordpressApi from '@/services/wordpressApi';

export const useWordPressEvents = (params: {
  page?: number;
  per_page?: number;
  search?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-events', params],
    queryFn: () => wordpressApi.getEvents(params),
  });
};

export const useWordPressEvent = (identifier: number | string) => {
  return useQuery({
    queryKey: ['wp-event', identifier],
    queryFn: () => wordpressApi.getEvent(identifier),
    enabled: !!identifier,
  });
};
