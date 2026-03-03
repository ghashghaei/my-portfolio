"use client";

import React from "react";
import {
  baseStyle,
  inputSizes,
  variants,
  labelPositions,
  fontSizes,
  wrapperStyle,
  errorStyle,
  Size,
  Variant,
  As,
  LabelPosition,
} from "./CoreInput.styles";

interface BaseCoreInputProps {
  inputSize?: Size;
  variant?: Variant;
  labelPosition?: LabelPosition;
  fontSize?: Size;
  error?: string;
  label?: string;
}
interface CoreInputAsInputProps
  extends BaseCoreInputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface CoreInputAsTextareaProps
  extends BaseCoreInputProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as?: "textarea";
}

type CoreInputProps = CoreInputAsInputProps | CoreInputAsTextareaProps;

export default function CoreInput({
  inputSize = "md",
  variant = "outline",
  labelPosition = "left",
  fontSize = "lg",
  label,
  error,
  as = "input",
  className = "",
  ...props
}: CoreInputProps) {
  const inputClassName = `
    ${baseStyle}
    ${inputSizes[inputSize]}
    ${variants[variant]}
    ${error ? errorStyle : ""}
    ${className}
  `;
  return (
    <div
      className={`
        ${wrapperStyle}
        ${labelPositions[labelPosition]}
        `}
    >
      {label && <label className={`${fontSizes[fontSize]}`}>{label}</label>}

      {as === "textarea" ? (
        <textarea
          className={inputClassName}
          aria-invalid={!!error}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={inputClassName}
          aria-invalid={!!error}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
