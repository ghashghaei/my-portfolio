export type BadgeSize = "sm" | "md" | "lg";

export type BadgeVariant = "primary" | "secondary" | "success" | "outline";

export type IconPosition = "left" | "right";

export type Rounded = "none" | "md" | "full";

export const baseStyle =
  "inline-flex items-center gap-1 transition-all duration-200";

export const sizes: Record<BadgeSize, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

export const variants: Record<BadgeVariant, string> = {
  primary: "bg-gray-500 text-white",
  secondary: "bg-gray-200 text-gray-800",
  success: "bg-green-500 text-white",
  outline: "border border-gray-400 text-gray-700 bg-transparent",
};

export const roundedStyles: Record<Rounded, string> = {
  none: "rounded-none",
  md: "rounded-md",
  full: "rounded-full",
};
