# Security Implementation Guide

## Overview

This document outlines the comprehensive security measures implemented in the Solio Group website to protect against common web vulnerabilities and attacks.

## Implemented Security Measures

### 1. Input Validation & Sanitization

All form inputs are validated using **Zod schemas** with strict validation rules:

#### Validation Rules:
- **Email**: RFC-compliant email validation, max 255 characters, converted to lowercase
- **Names**: Letters, spaces, hyphens, and apostrophes only, max 100 characters
- **Phone Numbers**: Digits, spaces, hyphens, plus signs, and parentheses only, max 20 characters
- **Messages**: Max 5000 characters for long messages, 1000 for short messages
- **File Uploads**: PDF, DOC, DOCX only, max 10MB

#### Implementation:
```typescript
// Located in: src/utils/validation.ts
import { jobApplicationSchema, validateAndSanitize } from '@/utils/validation';

const validation = validateAndSanitize(jobApplicationSchema, formData);
if (!validation.success) {
  // Handle validation errors
  return;
}
```

### 2. Rate Limiting & Brute Force Protection

**Rate Limiter** prevents brute force attacks by limiting submission attempts:

#### Configuration:
- **Max Attempts**: 5 per 15 minutes for forms, 3 per 15 minutes for authentication
- **Block Duration**: 1 hour after exceeding max attempts
- **Automatic Cleanup**: Expired entries removed every 5 minutes

#### Implementation:
```typescript
// Located in: src/utils/rateLimiter.ts
import { formRateLimiter } from '@/utils/rateLimiter';

if (formRateLimiter.isRateLimited(identifier)) {
  // Block submission
  return;
}
formRateLimiter.recordAttempt(identifier);
```

### 3. Bot Detection

**Honeypot Field** catches automated bot submissions:

#### How it works:
- Hidden field added to forms
- Legitimate users never see or fill it
- Bots often auto-fill all fields
- Submission rejected if honeypot is filled

#### Implementation:
```typescript
// Located in: src/utils/securityHeaders.ts
import { isHoneypotTriggered } from '@/utils/securityHeaders';

if (isHoneypotTriggered(formData)) {
  // Silent rejection - don't inform bot
  return;
}
```

### 4. CSRF Protection

**CSRF Tokens** prevent Cross-Site Request Forgery attacks:

#### Features:
- Unique token per session
- 1-hour token lifetime
- Token validation on sensitive operations
- Automatic token regeneration on expiry

#### Implementation:
```typescript
import { CSRFTokenManager } from '@/utils/securityHeaders';

const token = CSRFTokenManager.getToken();
// Include token in form submission
```

### 5. File Upload Security

Strict validation for file uploads:

#### Restrictions:
- **File Types**: PDF, DOC, DOCX only
- **File Size**: Maximum 10MB
- **Validation**: Both client-side and server-side
- **MIME Type Checking**: Validates actual file type, not just extension

### 6. XSS Prevention

Protection against Cross-Site Scripting attacks:

#### Measures:
- All user inputs sanitized before display
- HTML special characters escaped
- No use of `dangerouslySetInnerHTML` with user content
- Content Security Policy headers recommended

#### Sanitization Function:
```typescript
import { sanitizeHtml } from '@/utils/validation';

const safeContent = sanitizeHtml(userInput);
```

### 7. SQL Injection Prevention

Backend protection (PHP):

#### Measures:
- Prepared statements with parameterized queries
- Input sanitization using `htmlspecialchars()`
- Type validation before database operations
- Whitelist validation for enumerated values

### 8. Security Headers

Recommended HTTP security headers:

```
Content-Security-Policy: default-src 'self'; script-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
```

### 9. Email Security

Protection for email submissions:

#### Measures:
- BCC copy to administrator (maxwell.o@asking-group.com)
- Email validation and sanitization
- Rate limiting per email address
- Anti-spam honeypot field
- No email injection attacks via proper encoding

## Security Best Practices for Developers

### Form Development:

1. **Always validate on both client and server**
   ```typescript
   // Client-side
   const validation = validateAndSanitize(schema, data);
   
   // Server-side (PHP)
   $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
   ```

2. **Implement rate limiting for sensitive operations**
   ```typescript
   if (formRateLimiter.isRateLimited(identifier)) {
     return;
   }
   ```

3. **Use honeypot fields in all forms**
   ```html
   <input type="text" name="website" style="display:none" />
   ```

4. **Sanitize all user inputs**
   ```typescript
   const safe = sanitizeHtml(userInput);
   ```

5. **Validate file uploads thoroughly**
   ```typescript
   if (file.size > 10 * 1024 * 1024) return;
   if (!allowedTypes.includes(file.type)) return;
   ```

### API Development:

1. **Always use HTTPS**
2. **Implement proper CORS policies**
3. **Use CSRF tokens for state-changing operations**
4. **Log security events for monitoring**
5. **Never expose sensitive data in error messages**

## Server Configuration

### Recommended Nginx Configuration:

```nginx
# Add security headers
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# Rate limiting
limit_req_zone $binary_remote_addr zone=forms:10m rate=5r/m;
limit_req zone=forms burst=10 nodelay;

# File upload limits
client_max_body_size 10M;
```

### PHP Configuration:

```php
// Recommended php.ini settings
file_uploads = On
upload_max_filesize = 10M
post_max_size = 12M
max_execution_time = 30
max_input_time = 60
memory_limit = 128M

// Disable dangerous functions
disable_functions = exec,passthru,shell_exec,system,proc_open,popen
```

## Monitoring & Incident Response

### What to Monitor:

1. **Rate Limit Violations**: Track IPs hitting rate limits
2. **Honeypot Triggers**: Log bot detection events
3. **Failed Validation Attempts**: Monitor patterns
4. **File Upload Attempts**: Track rejected uploads
5. **CSRF Token Failures**: Alert on suspicious patterns

### Incident Response:

1. **Identify**: Monitor logs for suspicious activity
2. **Contain**: Block offending IPs at firewall level
3. **Investigate**: Review logs to understand attack vector
4. **Remediate**: Patch vulnerabilities, update rules
5. **Document**: Record incidents for future reference

## Security Updates

### Regular Maintenance:

- **Weekly**: Review security logs
- **Monthly**: Update dependencies (`npm audit fix`)
- **Quarterly**: Security audit and penetration testing
- **Annually**: Full security review and policy updates

### Dependency Updates:

```bash
# Check for security vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Manual review of high-severity issues
npm audit fix --force
```

## Contact

For security concerns or to report vulnerabilities:
- Email: security@solio-group.com
- Emergency: Contact IT department directly

## Compliance

This implementation follows:
- OWASP Top 10 guidelines
- GDPR data protection requirements
- Industry best practices for web application security

Last Updated: 2025-01-06
