import { z } from 'zod';

/**
 * Security-focused validation schemas
 * All inputs are validated, sanitized, and length-limited
 */

// Common validation patterns
const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']+$/;
const phoneRegex = /^[\d\s\-\+\(\)]+$/;

// Base schemas
export const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "L'email est requis" })
  .max(255, { message: "L'email est trop long" })
  .email({ message: "Email invalide" })
  .transform(email => email.toLowerCase());

export const nameSchema = z
  .string()
  .trim()
  .min(1, { message: "Le nom est requis" })
  .max(100, { message: "Le nom est trop long (max 100 caractères)" })
  .regex(nameRegex, { 
    message: "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes" 
  });

export const phoneSchema = z
  .string()
  .trim()
  .min(8, { message: "Le numéro de téléphone est trop court" })
  .max(20, { message: "Le numéro de téléphone est trop long" })
  .regex(phoneRegex, { 
    message: "Le numéro de téléphone contient des caractères invalides" 
  })
  .optional()
  .or(z.literal(''));

export const messageSchema = z
  .string()
  .trim()
  .min(1, { message: "Le message est requis" })
  .max(5000, { message: "Le message est trop long (max 5000 caractères)" });

export const shortMessageSchema = z
  .string()
  .trim()
  .max(1000, { message: "Le texte est trop long (max 1000 caractères)" })
  .optional()
  .or(z.literal(''));

// Contact form schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: messageSchema,
  type: z.enum(['candidature', 'postuler', 'inscription', 'contact']),
  jobTitle: z.string().max(200).optional(),
  eventTitle: z.string().max(200).optional(),
});

// Job application form schema
export const jobApplicationSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phone: z.string()
    .trim()
    .min(8, { message: "Le numéro de téléphone est requis et doit contenir au moins 8 chiffres" })
    .max(20, { message: "Le numéro de téléphone est trop long" })
    .regex(phoneRegex, { 
      message: "Le numéro de téléphone contient des caractères invalides" 
    }),
  coverLetter: shortMessageSchema,
  jobTitle: z.string().min(1).max(200),
  cvFileName: z.string().max(255).optional(),
  otherDocumentsFileName: z.string().max(255).optional(),
  agreement: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions"
  }),
  language: z.enum(['fr', 'en']).optional(),
});

// Showroom contact form schema
export const showroomContactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  company: z.string()
    .trim()
    .max(200, { message: "Le nom de l'entreprise est trop long" })
    .optional()
    .or(z.literal('')),
  message: messageSchema,
  showroom: z.string().max(100).optional(),
  visitDate: z.string().max(100).optional(),
  services: z.string().max(500).optional(),
  preferredContactMethod: z.enum(['email', 'phone', 'whatsapp']).optional(),
});

// File validation
export const fileSchema = z.object({
  name: z.string().max(255),
  size: z.number().max(10 * 1024 * 1024, { 
    message: "Le fichier est trop volumineux (max 10MB)" 
  }),
  type: z.string().refine(
    (type) => {
      const allowed = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      return allowed.includes(type);
    },
    { message: "Type de fichier non autorisé. Utilisez PDF, DOC ou DOCX" }
  ),
});

/**
 * Sanitize HTML content to prevent XSS
 * Note: This is a basic implementation. For production, use DOMPurify
 */
export function sanitizeHtml(html: string): string {
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate and sanitize form data
 */
export function validateAndSanitize<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { success: false, errors };
    }
    return { 
      success: false, 
      errors: { _form: 'Une erreur de validation est survenue' } 
    };
  }
}

/**
 * Encode for URL to prevent injection in external links
 */
export function encodeForUrl(str: string): string {
  return encodeURIComponent(str)
    .replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type JobApplicationData = z.infer<typeof jobApplicationSchema>;
export type ShowroomContactData = z.infer<typeof showroomContactSchema>;
