/**
 * Rate Limiter Utility
 * Prevents brute force attacks by limiting form submissions per IP/session
 */

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lastAttempt: number;
  blocked: boolean;
  blockUntil?: number;
}

class RateLimiter {
  private attempts: Map<string, RateLimitEntry> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;
  private readonly blockDurationMs: number;

  constructor(
    maxAttempts: number = 5,
    windowMs: number = 15 * 60 * 1000, // 15 minutes
    blockDurationMs: number = 60 * 60 * 1000 // 1 hour
  ) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.blockDurationMs = blockDurationMs;
    
    // Clean up old entries every 5 minutes
    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  /**
   * Check if an identifier (email, IP, etc.) is rate limited
   */
  isRateLimited(identifier: string): boolean {
    const entry = this.attempts.get(identifier);
    const now = Date.now();

    if (!entry) {
      return false;
    }

    // Check if currently blocked
    if (entry.blocked && entry.blockUntil && now < entry.blockUntil) {
      return true;
    }

    // If block expired, reset
    if (entry.blocked && entry.blockUntil && now >= entry.blockUntil) {
      this.attempts.delete(identifier);
      return false;
    }

    // Check if window has expired
    if (now - entry.firstAttempt > this.windowMs) {
      this.attempts.delete(identifier);
      return false;
    }

    return entry.count >= this.maxAttempts;
  }

  /**
   * Record an attempt
   */
  recordAttempt(identifier: string): void {
    const now = Date.now();
    const entry = this.attempts.get(identifier);

    if (!entry) {
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
        blocked: false,
      });
      return;
    }

    // Reset if window expired
    if (now - entry.firstAttempt > this.windowMs) {
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
        blocked: false,
      });
      return;
    }

    // Increment count
    entry.count++;
    entry.lastAttempt = now;

    // Block if exceeded max attempts
    if (entry.count >= this.maxAttempts) {
      entry.blocked = true;
      entry.blockUntil = now + this.blockDurationMs;
    }

    this.attempts.set(identifier, entry);
  }

  /**
   * Get remaining attempts before block
   */
  getRemainingAttempts(identifier: string): number {
    const entry = this.attempts.get(identifier);
    if (!entry) {
      return this.maxAttempts;
    }
    
    const now = Date.now();
    if (now - entry.firstAttempt > this.windowMs) {
      return this.maxAttempts;
    }

    return Math.max(0, this.maxAttempts - entry.count);
  }

  /**
   * Get time until unblock (in milliseconds)
   */
  getTimeUntilUnblock(identifier: string): number | null {
    const entry = this.attempts.get(identifier);
    if (!entry || !entry.blocked || !entry.blockUntil) {
      return null;
    }

    const now = Date.now();
    return Math.max(0, entry.blockUntil - now);
  }

  /**
   * Clean up expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [identifier, entry] of this.attempts.entries()) {
      // Remove if window expired or block expired
      if (
        now - entry.firstAttempt > this.windowMs * 2 ||
        (entry.blockUntil && now > entry.blockUntil + this.windowMs)
      ) {
        this.attempts.delete(identifier);
      }
    }
  }

  /**
   * Manually reset an identifier (for testing or admin override)
   */
  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

// Export singleton instances for different form types
export const formRateLimiter = new RateLimiter(5, 15 * 60 * 1000, 60 * 60 * 1000); // 5 attempts per 15min
export const loginRateLimiter = new RateLimiter(3, 15 * 60 * 1000, 30 * 60 * 1000); // 3 attempts per 15min

export default RateLimiter;
