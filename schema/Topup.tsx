import { z } from "zod";

  export const schema = z.object({
    Phonenumber: z.string().min(1, { message: 'Required' })
  });

type schema = z.infer<typeof schema>;