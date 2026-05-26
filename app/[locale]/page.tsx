import { sections } from "../config/section";
import { getLocale } from "../lib/getLocale";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ShowcaseSection from "../components/sections/ShowcaseSection";

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
        <section key={section.id} className="min-h-auto flex flex-col mb-24">
          <div id={section.id} className="scroll-mt-24">
            <h2 className="text-4xl font-bold mb-6">
              {lang.sections[section.id as keyof typeof lang.sections]}
            </h2>
          </div>

          {section.id === "about" && <AboutSection locale={locale} />}
          {section.id === "skills" && <SkillsSection />}
          {section.id === "experiences" && (
            <ExperienceSection locale={locale} />
          )}
          {section.id === "showcase" && <ShowcaseSection locale={locale} />}
        </section>
      ))}
    </div>
  );
}
