/**
 * Security Headers Configuration
 * These should be implemented in your server configuration (nginx, Apache, etc.)
 * or via meta tags where applicable
 */

export const securityHeaders = {
  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Note: Remove unsafe-* in production
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "data:"],
      connectSrc: ["'self'", "https://api.resend.com"],
      frameSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },

  // HTTP Strict Transport Security
  strictTransportSecurity: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },

  // X-Frame-Options
  xFrameOptions: "DENY",

  // X-Content-Type-Options
  xContentTypeOptions: "nosniff",

  // Referrer-Policy
  referrerPolicy: "strict-origin-when-cross-origin",

  // Permissions-Policy
  permissionsPolicy: {
    camera: "none",
    microphone: "none",
    geolocation: "none",
    payment: "none",
  },
};

/**
 * Generate meta tags for security headers
 */
export function getSecurityMetaTags(): string {
  return `
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="DENY">
    <meta name="referrer" content="strict-origin-when-cross-origin">
  `;
}

/**
 * CSRF Token Management
 * For forms that mutate data
 */
export class CSRFTokenManager {
  private static TOKEN_KEY = 'csrf_token';
  private static TOKEN_EXPIRY = 'csrf_token_expiry';
  private static TOKEN_LIFETIME = 3600000; // 1 hour

  static generateToken(): string {
    const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    const expiry = Date.now() + this.TOKEN_LIFETIME;
    
    sessionStorage.setItem(this.TOKEN_KEY, token);
    sessionStorage.setItem(this.TOKEN_EXPIRY, expiry.toString());
    
    return token;
  }

  static getToken(): string | null {
    const token = sessionStorage.getItem(this.TOKEN_KEY);
    const expiry = sessionStorage.getItem(this.TOKEN_EXPIRY);

    if (!token || !expiry) {
      return this.generateToken();
    }

    if (Date.now() > parseInt(expiry)) {
      this.clearToken();
      return this.generateToken();
    }

    return token;
  }

  static validateToken(token: string): boolean {
    const storedToken = this.getToken();
    return storedToken === token;
  }

  static clearToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.TOKEN_EXPIRY);
  }
}

/**
 * Honeypot field for bot detection
 * Add this hidden field to forms - if filled, it's likely a bot
 */
export function createHoneypotField(): string {
  return `
    <input 
      type="text" 
      name="website" 
      id="website" 
      autocomplete="off" 
      tabindex="-1"
      style="position: absolute; left: -9999px; width: 1px; height: 1px;"
      aria-hidden="true"
    />
  `;
}

/**
 * Check if honeypot was triggered
 */
export function isHoneypotTriggered(formData: FormData | Record<string, any>): boolean {
  const honeypotValue = formData instanceof FormData 
    ? formData.get('website')
    : formData.website;
  
  return honeypotValue !== null && honeypotValue !== '' && honeypotValue !== undefined;
}

/**
 * Browser fingerprinting for additional security
 * Helps identify suspicious patterns
 */
export function getBrowserFingerprint(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return 'unknown';
  
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillText('Security', 2, 2);
  
  const fingerprint = canvas.toDataURL();
  
  return btoa(fingerprint.slice(0, 100));
}
