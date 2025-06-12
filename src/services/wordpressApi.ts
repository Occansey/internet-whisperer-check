
import axios from 'axios';

/**
 * WordPress REST API service for integrating with WordPress as a headless CMS
 */
const WORDPRESS_API_URL = 'https://api.solio-group.com/wp-json/wp/v2';
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
  acf?: {
    date?: string;
    id?: string;
    tags?: string[];
    progress?: number;
    subsidiary?: string;
    location?: string;
    pays?: string;
    filiale?: string;
    progression?: string;
    capacite?: string;
    technologie?: string;
    stockage?: string;
    objectifs?: string;
    annual_co2_reduction?: string;
    impact?: string;
    optimisation?: string;
    // Updated gallery structure
    photo_gallery?: {
      galerie?: Array<Array<{
        id: number;
        title: string;
        caption: string;
        full_image_url: string;
        thumbnail_image_url: string;
        large_srcset: string;
        medium_srcset: string;
        media_details: any;
        alt_text: string;
        url: string;
        target: string;
      }>>;
    };
    video_youtube?: string;
    video_linkedin?: string;
    // Event-specific fields
    lieu?: string;
    heure?: string;
    heure_fin?: string;
    en_savoir_plus?: string;
  };
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

  // New method for fetching projects
  getProjects: async (params: { 
    page?: number; 
    per_page?: number;
    search?: string;
  } = {}) => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}/projets?_embed`, {
        params,
      });
      return response.data as WordPressPost[];
    } catch (error) {
      console.error('Error fetching WordPress projects:', error);
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

  // New method specifically for fetching a single communique
  getCommunique: async (identifier: number | string) => {
    try {
      console.log('Fetching communique with identifier:', identifier);
      
      const isNumeric = !isNaN(Number(identifier));
      
      if (isNumeric) {
        // Fetch by numeric ID
        const response = await axios.get(`https://api.solio-group.com/wp-json/wp/v2/communiques/${identifier}?_embed`);
        return response.data as WordPressPost;
      } else {
        // First try to fetch by slug
        let response = await axios.get(`https://api.solio-group.com/wp-json/wp/v2/communiques?slug=${identifier}&_embed`);
        
        if (response.data && response.data.length > 0) {
          return response.data[0] as WordPressPost;
        }
        
        // If not found by slug, try to fetch all posts and match by ACF ID
        const allPostsResponse = await axios.get(`https://api.solio-group.com/wp-json/wp/v2/communiques?_embed&per_page=100`);
        
        if (allPostsResponse.data && allPostsResponse.data.length > 0) {
          // Find post by ACF ID (trimmed to handle spaces)
          const foundPost = allPostsResponse.data.find((post: any) => 
            post.acf?.id?.trim() === identifier
          );
          
          if (foundPost) {
            return foundPost as WordPressPost;
          }
        }
        
        // If still not found, throw an error
        throw new Error(`Communique with identifier "${identifier}" not found`);
      }
    } catch (error) {
      console.error('Error fetching WordPress communique:', error);
      throw error;
    }
  },

  // New method for fetching a single project
  getProject: async (identifier: number | string) => {
    try {
      console.log('Fetching project with identifier:', identifier);
      
      const isNumeric = !isNaN(Number(identifier));
      
      if (isNumeric) {
        const response = await axios.get(`${WORDPRESS_API_URL}/projets/${identifier}?_embed`);
        return response.data as WordPressPost;
      } else {
        const response = await axios.get(`${WORDPRESS_API_URL}/projets?slug=${identifier}&_embed`);
        
        if (response.data && response.data.length > 0) {
          return response.data[0] as WordPressPost;
        }
        
        throw new Error(`Project with identifier "${identifier}" not found`);
      }
    } catch (error) {
      console.error('Error fetching WordPress project:', error);
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
