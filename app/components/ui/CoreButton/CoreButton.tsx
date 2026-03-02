"use client";

import React from "react";
import { baseStyle, sizes, variants, Size, Variant } from "./CoreButton.styles";

interface CoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
}

export default function CoreButton({
  size = "md",
  variant = "primary",
  className = "",
  children,
  ...props
}: CoreButtonProps) {
  return (
    <button
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
