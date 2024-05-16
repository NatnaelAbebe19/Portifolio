import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Cn(...inputs) {
  return twMerge(clsx(inputs));
}
