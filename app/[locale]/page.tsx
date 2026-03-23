import { sections } from "../config/section";
import { getLocale } from "../lib/getLocale";
import CoreRating from "../components/ui/CoreRating/CoreRating";
import CoreBadge from "../components/ui/CoreBadge/CoreBadge";
import CoreAccordion from "../components/ui/CoreAccordion/CoreAccordion";
import CoreTooltip from "../components/ui/CoreTooltip/CoreTooltip";
import CoreDropdown from "../components/ui/CoreSelect/CoreSelect";
import AboutSection from "../components/sections/AboutSection";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const lang = getLocale(locale);

  return (
    <div>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen flex flex-col gap-10"
        >
          <h2 className="text-4xl font-bold mb-6">
            {lang.sections[section.id as keyof typeof lang.sections]}
          </h2>
          {section.id === "about" && <AboutSection locale={locale} />}
        </section>
      ))}
    </div>
  );
}
