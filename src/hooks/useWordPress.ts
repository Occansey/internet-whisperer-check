import { useQuery } from '@tanstack/react-query';
import wordpressApi, { 
  WordPressPost, 
  WordPressPage,
  WordPressCategory,
  WordPressTag,
  WordPressMedia
} from '@/services/wordpressApi';

// Hooks for fetching WordPress data
export const useWordPressPosts = (params: {
  page?: number;
  per_page?: number;
  categories?: number[];
  tags?: number[];
  search?: string;
  slug?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-posts', params],
    queryFn: () => wordpressApi.getPosts(params),
  });
};

export const useWordPressPost = (identifier: number | string) => {
  return useQuery({
    queryKey: ['wp-post', identifier],
    queryFn: () => wordpressApi.getPost(identifier),
    enabled: !!identifier,
  });
};

export const useWordPressPages = (params: {
  page?: number;
  per_page?: number;
  search?: string;
  slug?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-pages', params],
    queryFn: () => wordpressApi.getPages(params),
  });
};

export const useWordPressPage = (identifier: number | string) => {
  return useQuery({
    queryKey: ['wp-page', identifier],
    queryFn: () => wordpressApi.getPage(identifier),
    enabled: !!identifier,
  });
};

export const useWordPressCategories = (params: {
  page?: number;
  per_page?: number;
  slug?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-categories', params],
    queryFn: () => wordpressApi.getCategories(params),
  });
};

export const useWordPressTags = (params: {
  page?: number;
  per_page?: number;
  slug?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-tags', params],
    queryFn: () => wordpressApi.getTags(params),
  });
};

export const useWordPressMedia = (id: number) => {
  return useQuery({
    queryKey: ['wp-media', id],
    queryFn: () => wordpressApi.getMedia(id),
    enabled: !!id,
  });
};

export const useWordPressCommuniques = (params: {
  page?: number;
  per_page?: number;
  search?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-communiques', params],
    queryFn: () => wordpressApi.getCommuniques(params),
  });
};

export const useWordPressCommunique = (identifier: number | string) => {
  return useQuery({
    queryKey: ['wp-communique', identifier],
    queryFn: () => wordpressApi.getCommunique(identifier),
    enabled: !!identifier,
  });
};

// New hooks for projects
export const useWordPressProjects = (params: {
  page?: number;
  per_page?: number;
  search?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wp-projects', params],
    queryFn: () => wordpressApi.getProjects(params),
  });
};

export const useWordPressProject = (identifier: number | string) => {
  return useQuery({
    queryKey: ['wp-project', identifier],
    queryFn: () => wordpressApi.getProject(identifier),
    enabled: !!identifier,
  });
};

// New hooks for events
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

export const renderWordPressContent = (content: string): { __html: string } => {
  return { __html: content };
};
