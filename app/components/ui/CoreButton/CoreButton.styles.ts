export type Size = "sm" | "md" | "lg";
export type Variant = "primary" | "secondary" | "outline" | "ghost";

export const baseStyle = "px-4 py-2 rounded-md transition-all duration-200";

export const sizes: Record<Size, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
};

export const variants: Record<Variant, string> = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  outline: "border border-black text-black bg-transparent",
  ghost: "text-black hover:bg-gray-100",
};
