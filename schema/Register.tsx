import { z } from "zod";

  export const schema = z.object({
    
    Name: z.string().min(1, { message: 'Required' }),
    
    Phonenumber: z.string().min(1, { message: 'Required' }),
    Email: z.string().min(1, { message: 'Required' }),
        Password: z.string().min(1, { message: 'Required' }),
  });

export type schema = z.infer<typeof schema>;