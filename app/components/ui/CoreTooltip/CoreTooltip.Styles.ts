export type TooltipPosition = "top" | "bottom" | "left" | "right";

export const wrapperStyle = "relative inline-block group";

export const tooltipBase =
  "absolute z-10 px-2 py-1 text-xs rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-white bg-gray-500 dark:text-black dark:bg-white";

export const positions: Record<TooltipPosition, string> = {
  top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
  bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
  left: "right-full mr-2 top-1/2 -translate-y-1/2",
  right: "left-full ml-2 top-1/2 -translate-y-1/2",
};
