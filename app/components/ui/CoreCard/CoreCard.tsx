"use client";

import { ReactNode } from "react";
import { Variant, variants, baseStyles } from "./CoreCard.styles";

interface CoreCardProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export default function CoreCard({
  children,
  className = "",
  variant = "default",
}: CoreCardProps) {
  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}
