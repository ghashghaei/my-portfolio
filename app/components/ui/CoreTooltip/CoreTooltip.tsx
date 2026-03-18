"use client";

import {
  wrapperStyle,
  tooltipBase,
  positions,
  TooltipPosition,
} from "./CoreTooltip.Styles";

type CoreTooltipProps = {
  text: string;
  position?: TooltipPosition;
  children: React.ReactNode;
};

export default function CoreTooltip({
  text,
  position = "top",
  children,
}: CoreTooltipProps) {
  return (
    <div className={wrapperStyle}>
      {children}

      <div className={`${tooltipBase} ${positions[position]}`}>{text}</div>
    </div>
  );
}
