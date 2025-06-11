import { z } from "zod/v4";
 type schema = z.infer<typeof schema>;

export const schema = z.object({
  
  Phonenumber: z.string(),
  Code: z.string()
});

