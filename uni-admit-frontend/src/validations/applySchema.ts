import { z } from "zod";

export const applicationSchema = z.object({
    profileId: z
        .string()
        .uuid("Invalid profile"),

    courseName: z
        .string()
        .trim()
        .min(2, "Course name is required"),

    university: z
        .string()
        .trim()
        .min(2, "University name is required"),

    intakeYear: z
        .number()
        .min(new Date().getFullYear())
        .max(new Date().getFullYear() + 10),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;