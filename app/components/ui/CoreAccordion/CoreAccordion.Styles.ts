export type AccordionWidth = "sm" | "md" | "lg" | "full";

export const widthStyles: Record<AccordionWidth, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  full: "w-full",
};

export const containerStyle = "border border-gray-200 rounded-lg";

export const headerStyle =
  "flex justify-between items-center p-4 cursor-pointer font-medium";

export const contentWrapper = "grid transition-all duration-300 ease-in-out";

export const contentInner = "overflow-hidden";

export const contentStyle =
  "p-4 border-t border-gray-200 text-sm text-gray-700";
