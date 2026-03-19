"use client";

import { useState } from "react";
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
            <div key={item.value} className={itemStyle}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
