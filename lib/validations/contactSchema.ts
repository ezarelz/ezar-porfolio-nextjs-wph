// components/footer/contacts/contactSchema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must be less than 100 characters.'),

  message: z
    .string()
    .min(3, 'Message must be at least 3 characters.')
    .max(5000, 'Message must be less than 5000 characters.'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
