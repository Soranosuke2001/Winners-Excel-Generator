import { z } from "zod";

export const customTimeFormat = z.string().refine((value) => {
  // Use a regular expression to check if the input matches the "00:00" format
  const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
  return timeRegex.test(value);
}, {
  message: 'Invalid time format. Please use the "00:00" format.',
});

export const newFormSchema = z.object({
  cartons: z.number() || z.enum(["-"]),
  ratio: z.number() || z.enum(["-"]),
  skids: z.number() || z.enum(["-"]),
  regular: z.number() || z.enum(["-"]),
  bigBox: z.number() || z.enum(["-"]),
  loose: z.number() || z.enum(["-"]),
  eightFeet: z.number() || z.enum(["-"]),
  associates: z.number() || z.enum(["-"]),
  totalMin: z.number() || z.enum(["-"]),
  startTime: z.enum(["-"]) || customTimeFormat,
  endTime: z.string() || z.enum(["-"]) || customTimeFormat,
  breakTime: z.string() || z.enum(["-"]) || customTimeFormat,
});
