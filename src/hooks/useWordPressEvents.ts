
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = "https://solio-group.com/wp-json/wp/v2/evenements?_embed";

interface WordPressEvent {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  meta?: {
    date?: string;
    heure?: string;
    lieu?: string;
    type?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

interface TransformedEvent {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  heure: string;
  lieu: string;
  type: string;
  image: string;
}

const fetchWordPressEvents = async (): Promise<TransformedEvent[]> => {
  const response = await axios.get(API_URL);
  return response.data.map((event: WordPressEvent) => ({
    id: event.id,
    title: event.title.rendered,
    excerpt: event.excerpt.rendered,
    content: event.content.rendered,
    date: event.meta?.date || event.date,
    heure: event.meta?.heure || '',
    lieu: event.meta?.lieu || '',
    type: event.meta?.type || '',
    image: event._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
  }));
};

export const useWordPressEvents = () => {
  return useQuery({
    queryKey: ['wordpress-events'],
    queryFn: fetchWordPressEvents,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};
