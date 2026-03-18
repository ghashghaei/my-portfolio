"use client";

import {
  baseStyle,
  sizes,
  variants,
  roundedStyles,
  BadgeSize,
  BadgeVariant,
  BadgeRounded,
  IconPosition,
} from "./CoreBadge.Styles";

type CoreBadgeProps = {
  label: string;
  size?: BadgeSize;
  variant?: BadgeVariant;
  rounded?: BadgeRounded;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
};

export default function CoreBadge({
  label,
  size = "md",
  variant = "secondary",
  rounded = "full",
  icon,
  iconPosition = "left",
}: CoreBadgeProps) {
  return (
    <span
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${roundedStyles[rounded]}`}
    >
      {icon && iconPosition === "left" && icon}

      {label}

      {icon && iconPosition === "right" && icon}
    </span>
  );
}
