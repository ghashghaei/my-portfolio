"use client";

import { useState, useRef, useEffect } from "react";
import {
  containerStyle,
  headerStyle,
  contentWrapper,
  contentStyle,
} from "./CoreAccordion.Styles";

type CoreAccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function CoreAccordion({ title, children }: CoreAccordionProps) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const scrollHeight = contentRef.current.scrollHeight;
    setHeight(open ? scrollHeight : 0);
  }, [open]);

  return (
    <div className={containerStyle}>
      <div className={headerStyle} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span>{open ? "-" : "+"}</span>
      </div>

      <div className={contentWrapper} style={{ height: `${height}px` }}>
        <div ref={contentRef} className={contentStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}
