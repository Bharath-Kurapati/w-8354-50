
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper for creating gradient effects with the brand colors
export function createPurpleGradient(variant: 'text' | 'bg' = 'bg') {
  return `${variant}-gradient-to-r from-[#5145FF] to-[#7165ff]`;
}
