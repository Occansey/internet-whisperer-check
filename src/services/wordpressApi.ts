
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
    progression?: string;
    subsidiary?: string;
    location?: string;
    pays?: string;
    filiale?: string;
    capacite?: string;
    technologie?: string;
    stockage?: string;
    objectifs?: string;
    annual_co2_reduction?: string;
    impact?: string;
    optimisation?: string;
    // Gallery and video fields
    photo_gallery?: {
      galerie?: any[][];
      gallery?: any[][];
    };
    galerie?: any[];
    gallery?: any[];
    video_youtube?: string;
    video_linkedin?: string;
    // Replay fields for events
    replay_youtube?: string;
    replay_linkedin?: string;
    // Event-specific fields
    lieu?: string;
    heure?: string;
    heure_fin?: string;
    'heure-fin'?: string;
    en_savoir_plus?: string;
    type?: string;
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
        timeout: 10000, // 10 second timeout
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
        timeout: 10000,
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
        timeout: 10000,
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
      
      const response = await axios.get(endpoint, { timeout: 10000 });
      return isNumeric ? response.data as WordPressPost : response.data[0] as WordPressPost;
    } catch (error) {
      console.error('Error fetching WordPress post:', error);
      throw error;
    }
  },

  // Improved method for fetching a single communique with better error handling
  getCommunique: async (identifier: number | string) => {
    try {
      console.log('Fetching communique with identifier:', identifier);
      
      const isNumeric = !isNaN(Number(identifier));
      
      if (isNumeric) {
        // Fetch by numeric ID
        try {
          const response = await axios.get(`https://api.solio-group.com/wp-json/wp/v2/communiques/${identifier}?_embed`, { timeout: 10000 });
          return response.data as WordPressPost;
        } catch (error: any) {
          if (error.response?.status === 404) {
            console.log(`Communique with ID ${identifier} not found, trying other methods...`);
          } else {
            throw error;
          }
        }
      }
      
      // Try to fetch by slug
      try {
        const response = await axios.get(`https://api.solio-group.com/wp-json/wp/v2/communiques?slug=${identifier}&_embed`, { timeout: 10000 });
        
        if (response.data && response.data.length > 0) {
          return response.data[0] as WordPressPost;
        }
      } catch (error) {
        console.log(`Error fetching by slug: ${error}`);
      }
      
      // If not found by slug, try to fetch all posts and match by ACF ID
      try {
        const allPostsResponse = await axios.get(`https://api.solio-group.com/wp-json/wp/v2/communiques?_embed&per_page=100`, { timeout: 15000 });
        
        if (allPostsResponse.data && allPostsResponse.data.length > 0) {
          // Find post by ACF ID (trimmed to handle spaces)
          const foundPost = allPostsResponse.data.find((post: any) => 
            post.acf?.id?.trim() === identifier
          );
          
          if (foundPost) {
            return foundPost as WordPressPost;
          }
        }
      } catch (error) {
        console.log(`Error fetching all communiques: ${error}`);
      }
      
      // If still not found, return null instead of throwing error
      console.log(`Communique with identifier "${identifier}" not found`);
      return null;
    } catch (error) {
      console.error('Error fetching WordPress communique:', error);
      return null; // Return null instead of throwing
    }
  },

  // Improved method for fetching a single project with better error handling
  getProject: async (identifier: number | string) => {
    try {
      console.log('Fetching project with identifier:', identifier);
      
      const isNumeric = !isNaN(Number(identifier));
      
      if (isNumeric) {
        try {
          const response = await axios.get(`${WORDPRESS_API_URL}/projets/${identifier}?_embed`, { timeout: 10000 });
          return response.data as WordPressPost;
        } catch (error: any) {
          if (error.response?.status === 404) {
            console.log(`Project with ID ${identifier} not found, trying other methods...`);
          } else {
            throw error;
          }
        }
      }
      
      // Try to fetch by slug
      try {
        const response = await axios.get(`${WORDPRESS_API_URL}/projets?slug=${identifier}&_embed`, { timeout: 10000 });
        
        if (response.data && response.data.length > 0) {
          return response.data[0] as WordPressPost;
        }
      } catch (error) {
        console.log(`Error fetching project by slug: ${error}`);
      }
      
      // Return null instead of throwing error
      console.log(`Project with identifier "${identifier}" not found`);
      return null;
    } catch (error) {
      console.error('Error fetching WordPress project:', error);
      return null; // Return null instead of throwing
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
        timeout: 10000,
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
      
      const response = await axios.get(endpoint, { timeout: 10000 });
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
        timeout: 10000,
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
        timeout: 10000,
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
      const response = await axios.get(`${WORDPRESS_API_URL}/media/${id}`, { timeout: 10000 });
      return response.data as WordPressMedia;
    } catch (error) {
      console.error('Error fetching WordPress media:', error);
      throw error;
    }
  },

  // Enhanced method for fetching events with ACF fields
  getEvents: async (params: { 
    page?: number; 
    per_page?: number;
    search?: string;
  } = {}) => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}/evenements?_embed`, {
        params,
        timeout: 10000,
      });
      return response.data as WordPressPost[];
    } catch (error) {
      console.error('Error fetching WordPress events:', error);
      throw error;
    }
  },

  getEvent: async (identifier: number | string) => {
    try {
      const isNumeric = !isNaN(Number(identifier));
      
      if (isNumeric) {
        try {
          const response = await axios.get(`${WORDPRESS_API_URL}/evenements/${identifier}?_embed`, { timeout: 10000 });
          return response.data as WordPressPost;
        } catch (error: any) {
          if (error.response?.status === 404) {
            console.log(`Event with ID ${identifier} not found, trying other methods...`);
          } else {
            throw error;
          }
        }
      }
      
      // Try to fetch by slug
      try {
        const response = await axios.get(`${WORDPRESS_API_URL}/evenements?slug=${identifier}&_embed`, { timeout: 10000 });
        
        if (response.data && response.data.length > 0) {
          return response.data[0] as WordPressPost;
        }
      } catch (error) {
        console.log(`Error fetching event by slug: ${error}`);
      }
      
      // Return null instead of throwing error
      console.log(`Event with identifier "${identifier}" not found`);
      return null;
    } catch (error) {
      console.error('Error fetching WordPress event:', error);
      return null;
    }
  },

  // Check WordPress connection
  checkConnection: async () => {
    try {
      const response = await axios.get(`${WORDPRESS_API_URL}`, { timeout: 5000 });
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
