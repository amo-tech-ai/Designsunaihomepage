import { z } from "zod";

export const wizardSchema = z.object({
  // Step 1: Overview
  name: z.string().min(2, "Name must be at least 2 characters"),
  website: z.string().url("Please enter a valid URL (include https://)").optional().or(z.literal("")),
  companyName: z.string().min(2, "Company name is required"),

  // Step 2: Services
  services: z.array(z.string()).min(1, "Please select at least one service"),

  // Step 3: Goals
  goals: z.array(z.string()).min(1, "Please select at least one goal"),
  description: z.string().min(20, "Please provide a bit more detail (min 20 chars)"),

  // Step 4: Constraints
  budget: z.number().min(5000, "Budget must be at least $5,000"),
  timeline: z.string().min(1, "Please select a timeline"),
});

export type WizardFormData = z.infer<typeof wizardSchema>;
