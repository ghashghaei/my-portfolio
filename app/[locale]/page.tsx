import { sections } from "../config/section";
import { getLocale } from "../lib/getLocale";

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
          className="min-h-screen flex items-center"
        >
          <h2 className="text-4xl">
            {lang.sections[section.id as keyof typeof lang.sections]}
          </h2>
        </section>
      ))}
    </div>
  );
}
