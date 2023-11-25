import { z } from "zod";

export const ConfigSchema = z.object({
    limits: z.object({
        round1: z.number().default(50),
        round2: z.number().default(25),
    }),
    participants: z.string().array().default([]).transform(values => values.sort()),
});

export type Config = z.infer<typeof ConfigSchema>;