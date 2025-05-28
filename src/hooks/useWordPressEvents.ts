
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = "https://api.solio-group.com/wp-json/wp/v2/evenements?_embed";

interface WordPressEvent {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  acf?: {
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

const formatDateToFrench = (dateStr: string): string => {
  // Handle both ACF date format (10/06/2025) and ISO format (2025-05-28T21:12:44)
  let date: Date;
  
  if (dateStr.includes('/')) {
    // ACF date format: 10/06/2025
    const [day, month, year] = dateStr.split('/');
    date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    // ISO format or other
    date = new Date(dateStr);
  }
  
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
};

const fetchWordPressEvents = async (): Promise<TransformedEvent[]> => {
  const response = await axios.get(API_URL);
  return response.data.map((event: WordPressEvent) => ({
    id: event.id,
    title: event.title.rendered,
    excerpt: event.excerpt.rendered,
    content: event.content.rendered,
    date: event.acf?.date ? formatDateToFrench(event.acf.date) : formatDateToFrench(event.date),
    heure: event.acf?.heure || '',
    lieu: event.acf?.lieu || '',
    type: event.acf?.type || '',
    image: event._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
  }));
};

export const useWordPressEvents = () => {
  return useQuery({
    queryKey: ['wordpress-events'],
    queryFn: fetchWordPressEvents,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
