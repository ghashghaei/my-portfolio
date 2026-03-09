import type { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";
import { navItems } from "../config/navigation";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated Portfolio",
};

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-white">
        <Header locale={locale} items={navItems} />

        <main className="flex-1 container mx-auto px-6 py-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
