import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) =>
  z.object({
    // sign up
    firstName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    lastName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    company: type === "sign-in" ? z.string().optional() : z.string().max(50),
    phone: type === "sign-in" ? z.string().optional() : z.string().max(50),
    repeatpassword:
      type === "sign-in" ? z.string().optional() : z.string().min(8),
    email: z.string().email(),
    password: z.string().min(8),
  });
