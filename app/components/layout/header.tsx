"use client";

import { useState } from "react";
import Link from "next/link";
import CoreSelect from "../ui/CoreSelect/CoreSelect";
import { NavItem } from "../../config/navigation";
import { getLocale } from "../../lib/getLocale";

interface HeaderProps {
  items: NavItem[];
  locale: string;
}

export default function Header({ items, locale }: HeaderProps) {
  const lang = getLocale(locale);
  const nextLocale = locale === "en" ? "de" : "en";
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems = items.map((item) => ({
    label: lang.nav[item.id as keyof typeof lang.nav],
    value: `/${locale}${item.href}`,
  }));

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-cyan-400">
          My Portfolio
        </div>

        {/* Desktop Dropdown */}
        <div className="hidden md:block">
          <CoreSelect label="Menu" items={dropdownItems} size="md" />
        </div>

        {/* Language Switch */}
        <Link href={`/${nextLocale}`} className="border px-3 py-1 rounded">
          {locale.toUpperCase()}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              {lang.nav[item.id as keyof typeof lang.nav]}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
