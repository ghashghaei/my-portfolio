"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  containerStyle,
  headerStyle,
  contentWrapper,
  contentInner,
  contentStyle,
  widthStyles,
  AccordionWidth,
} from "./CoreAccordion.Styles";

type CoreAccordionProps = {
  title: string;
  children: React.ReactNode;
  width?: AccordionWidth;
};

export default function CoreAccordion({
  title,
  children,
  width = "full",
}: CoreAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${containerStyle} ${widthStyles[width]}`}>
      <div className={headerStyle} onClick={() => setOpen(!open)}>
        <span>{title}</span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`${contentWrapper} ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={contentInner}>
          <div className={contentStyle}>{children}</div>
        </div>
      </div>
    </div>
  );
}
