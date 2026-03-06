import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { navItems } from "./config/navigation";

import Header from "./header";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated Portfolio",
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-white">
        <Header items={navItems} />

        <main className="flex-1 container mx-auto px-6 py-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
