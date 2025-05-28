import axios from 'axios';

/**
 * WordPress REST API service for integrating with WordPress as a headless CMS
 */
const WORDPRESS_API_URL = 'https://api.solio-group.com/wp-json/wp/v2/communiques?_embed';
const COMMUNIQUES_API_URL = "https://api.solio-group.com/wp-json/wp/v2/communiques?_embed";

// Types for WordPress API responses
export interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
      alt_text: string;
    }[];
  };
}

export interface WordPressPage {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
      alt_text: string;
    }[];
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes?: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

// WordPress API service
const wordpressApi = {
  // Posts
  getPosts: async (params: { 
    page?: number; 
    per_page?: number; 
    categories?: number[]; 
    tags?: number[];
    search?: string;
    slug?: string;
  } = {}) => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}/posts`, {
        params: {
          _embed: 'wp:featuredmedia',
          ...params,
        },
      });
      return response.data as WordPressPost[];
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      throw error;
    }
  },

  // Specific method for fetching communiques
  getCommuniques: async (params: { 
    page?: number; 
    per_page?: number;
    search?: string;
  } = {}) => {
    try {
      const response = await axios.get(COMMUNIQUES_API_URL, {
        params,
      });
      return response.data as WordPressPost[];
    } catch (error) {
      console.error('Error fetching WordPress communiques:', error);
      throw error;
    }
  },

  getPost: async (identifier: number | string) => {
    try {
      const isNumeric = !isNaN(Number(identifier));
      const endpoint = isNumeric 
        ? `${WORDPRESS_API_URL}/posts/${identifier}?_embed=wp:featuredmedia` 
        : `${WORDPRESS_API_URL}/posts?slug=${identifier}&_embed=wp:featuredmedia`;
      
      const response = await axios.get(endpoint);
      return isNumeric ? response.data as WordPressPost : response.data[0] as WordPressPost;
    } catch (error) {
      console.error('Error fetching WordPress post:', error);
      throw error;
    }
  },

  // Pages
  getPages: async (params: { 
    page?: number; 
    per_page?: number;
    search?: string;
    slug?: string;
  } = {}) => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}/pages`, {
        params: {
          _embed: 'wp:featuredmedia',
          ...params,
        },
      });
      return response.data as WordPressPage[];
    } catch (error) {
      console.error('Error fetching WordPress pages:', error);
      throw error;
    }
  },

  getPage: async (identifier: number | string) => {
    try {
      const isNumeric = !isNaN(Number(identifier));
      const endpoint = isNumeric 
        ? `${WORDPRESS_API_URL}/pages/${identifier}?_embed=wp:featuredmedia` 
        : `${WORDPRESS_API_URL}/pages?slug=${identifier}&_embed=wp:featuredmedia`;
      
      const response = await axios.get(endpoint);
      return isNumeric ? response.data as WordPressPage : response.data[0] as WordPressPage;
    } catch (error) {
      console.error('Error fetching WordPress page:', error);
      throw error;
    }
  },

  // Categories
  getCategories: async (params: { 
    page?: number; 
    per_page?: number;
    slug?: string;
  } = {}) => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}/categories`, {
        params,
      });
      return response.data as WordPressCategory[];
    } catch (error) {
      console.error('Error fetching WordPress categories:', error);
      throw error;
    }
  },

  // Tags
  getTags: async (params: { 
    page?: number; 
    per_page?: number;
    slug?: string;
  } = {}) => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}/tags`, {
        params,
      });
      return response.data as WordPressTag[];
    } catch (error) {
      console.error('Error fetching WordPress tags:', error);
      throw error;
    }
  },

  // Media
  getMedia: async (id: number) => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}/media/${id}`);
      return response.data as WordPressMedia;
    } catch (error) {
      console.error('Error fetching WordPress media:', error);
      throw error;
    }
  },

  // Check WordPress connection
  checkConnection: async () => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}`);
      return {
        isConnected: true,
        version: response.data?.namespaces?.includes('wp/v2') ? 'v2' : 'unknown',
        status: response.status
      };
    } catch (error) {
      console.error('Error connecting to WordPress API:', error);
      return {
        isConnected: false,
        error: error
      };
    }
  }
};

export default wordpressApi;
