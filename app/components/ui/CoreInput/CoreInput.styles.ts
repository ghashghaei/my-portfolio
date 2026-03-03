export type As = "input" | "textarea";
export type Size = "sm" | "md" | "lg";
export type Variant = "outline" | "filled";
export type LabelPosition = "left" | "right" | "top";

export const baseStyle =
  "border rounded-md px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2";
export const errorStyle = "border-red-500 focus:ring-red-500";
export const wrapperStyle = "flex gap-2";

export const inputSizes: Record<Size, string> = {
  sm: "text-sm h-8 w-40",
  md: "text-base h-10 w-64",
  lg: "text-lg h-12 w-80",
};

export const fontSizes: Record<Size, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const variants: Record<Variant, string> = {
  outline: "border-gray-300 focus:ring-blue-500",
  filled: "bg-gray-100 border-transparent focus:ring-blue-500",
};

export const labelPositions: Record<LabelPosition, string> = {
  top: "flex flex-col items-start",
  left: "flex flex-row items-center",
  right: "flex flex-row-reverse items-center",
};
