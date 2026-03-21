"use client";

import { useState } from "react";
import Link from "next/link";
import {
  containerStyle,
  buttonBase,
  menuStyle,
  itemStyle,
  sizes,
  DropdownSize,
} from "./CoreSelect.Styles";

type DropdownItem = {
  label: string;
  value: string;
};

type CoreDropdownProps = {
  label: string;
  items: DropdownItem[];
  size?: DropdownSize;
};

export default function CoreDropdown({
  label,
  items,
  size = "md",
}: CoreDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={containerStyle}>
      <div
        className={`${buttonBase} ${sizes[size]}`}
        onClick={() => setOpen(!open)}
      >
        {label}
        <span>▾</span>
      </div>

      {open && (
        <div className={menuStyle}>
          {items.map((item) => (
            <Link
              key={item.value}
              href={item.value}
              className={`${itemStyle} block w-full`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
