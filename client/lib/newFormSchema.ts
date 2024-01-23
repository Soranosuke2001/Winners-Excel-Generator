import { z } from "zod";

const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

const customTimeFormat = z.string().regex(timeRegex, {
  message: "Invalid time format. Expected format: hh:mm",
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
  startTime: customTimeFormat || z.enum(["-"]),
  endTime: customTimeFormat || z.enum(["-"]),
  breakTime: customTimeFormat || z.enum(["-"]),
});
