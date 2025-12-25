import { z } from "zod";

export const planSchema = z.object({
  name: z.string().min(2),
  age: z.number().min(10).max(80),
  gender: z.string(),
  height: z.number(),
  weight: z.number(),
  goal: z.string(),
  level: z.string(),
  location: z.string(),
  diet: z.string(),
  medical: z.string().optional(),
  stress: z.string().optional()
});
