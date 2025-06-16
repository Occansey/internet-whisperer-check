
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { decodeHtmlEntities } from '@/utils/htmlUtils';

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
    en_savoir_plus?: string;
    'heure-fin'?: string;
    heure_fin?: string;
    photo_gallery?: {
      gallery?: any[][];
      galerie?: any[][];
    };
    galerie?: any[];
    video_youtube?: string;
    video_linkedin?: string;
    replay_youtube?: string;
    replay_linkedin?: string;
    tags?: Array<{
      term_id: number;
      name: string;
      slug: string;
    }>;
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
  en_savoir_plus?: string;
  'heure-fin'?: string;
  heure_fin?: string;
  tags?: string[];
  gallery?: any[];
  video_youtube?: string;
  video_linkedin?: string;
  replay_youtube?: string;
  replay_linkedin?: string;
}

const formatDateToFrench = (dateStr: string): string => {
  console.log('Hook formatting date:', dateStr);
  
  if (!dateStr) return '';
  
  let date: Date;
  
  if (dateStr.includes('/')) {
    // ACF date format: 10/06/2025 or 22/03/2024
    const [day, month, year] = dateStr.split('/');
    date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    // ISO format or other
    date = new Date(dateStr);
  }
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    console.error('Invalid date in hook:', dateStr);
    return dateStr;
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
  console.log('Raw WordPress events:', response.data);
  
  return response.data.map((event: WordPressEvent) => {
    // Extract gallery from ACF
    let gallery: any[] = [];
    if (event.acf?.photo_gallery?.gallery?.[0]) {
      gallery = event.acf.photo_gallery.gallery[0];
    } else if (event.acf?.photo_gallery?.galerie?.[0]) {
      gallery = event.acf.photo_gallery.galerie[0];
    } else if (event.acf?.galerie) {
      gallery = event.acf.galerie;
    }

    const transformed = {
      id: event.id,
      title: decodeHtmlEntities(event.title.rendered),
      excerpt: decodeHtmlEntities(event.excerpt.rendered),
      content: decodeHtmlEntities(event.content.rendered),
      date: event.acf?.date || formatDateToFrench(event.date),
      heure: event.acf?.heure || '',
      lieu: decodeHtmlEntities(event.acf?.lieu || ''),
      type: event.acf?.type || '',
      image: event._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
      en_savoir_plus: event.acf?.en_savoir_plus || '',
      'heure-fin': event.acf?.['heure-fin'] || '',
      heure_fin: event.acf?.heure_fin || '',
      tags: event.acf?.tags?.map(tag => tag.name) || [],
      gallery,
      video_youtube: event.acf?.video_youtube,
      video_linkedin: event.acf?.video_linkedin,
      replay_youtube: event.acf?.replay_youtube,
      replay_linkedin: event.acf?.replay_linkedin,
    };
    
    console.log('Transformed event:', transformed);
    return transformed;
  });
};

export const useWordPressEvents = () => {
  return useQuery({
    queryKey: ['wordpress-events'],
    queryFn: fetchWordPressEvents,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
