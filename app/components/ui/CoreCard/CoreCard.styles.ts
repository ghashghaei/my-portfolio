export type Variant = "default" | "outlined" | "elevated";

export const baseStyles = "rounded-xl bg-white transition";

export const variants: Record<Variant, string> = {
  default: "border border-gray-200 shadow-sm",
  outlined: "border border-gray-300",
  elevated: "shadow-lg",
};
