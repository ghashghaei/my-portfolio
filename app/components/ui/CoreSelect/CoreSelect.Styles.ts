export type DropdownSize = "sm" | "md" | "lg" | "xl" | "2xl";

export const containerStyle = "relative inline-block";

export const buttonBase =
  "flex items-center justify-between border rounded-md cursor-pointer";

export const menuStyle =
  "absolute left-0 w-full border rounded-md shadow-md z-20";

export const itemStyle = "px-4 py-2 cursor-pointer hover:bg-gray-500";

export const sizes: Record<DropdownSize, string> = {
  sm: "w-32 px-2 py-1 ",
  md: "w-48 px-2 py-1 ",
  lg: "w-64 px-2 py-1 ",
  xl: "w-80 px-2 py-1 ",
  "2xl": "w-96 px-2 py-1 ",
};
