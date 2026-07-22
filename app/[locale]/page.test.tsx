import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

vi.mock("../config/section", () => ({
  sections: [
    { id: "about" },
    { id: "skills" },
    { id: "experiences" },
    { id: "showcase" },
    { id: "feedback" },
  ],
}));

vi.mock("../lib/getLocale", () => ({
  getLocale: () => ({
    sections: {
      about: "About",
      skills: "Skills",
      experiences: "Experience",
      showcase: "Showcase",
      feedback: "Feedback",
    },
  }),
}));

vi.mock("../components/sections/AboutSection", () => ({
  default: () => <div data-testid="about-section" />,
}));
vi.mock("../components/sections/SkillsSection", () => ({
  default: () => <div data-testid="skills-section" />,
}));
vi.mock("../components/sections/ExperienceSection", () => ({
  default: () => <div data-testid="experience-section" />,
}));
vi.mock("../components/sections/ShowcaseSection", () => ({
  default: () => <div data-testid="showcase-section" />,
}));
vi.mock("../components/sections/FeedbackSection", () => ({
  default: () => <div data-testid="feedback-section" />,
}));

describe("HomePage", () => {
  it("renders the title for every section from the locale", async () => {
    const jsx = await HomePage({ params: Promise.resolve({ locale: "en" }) });
    render(jsx);

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Showcase")).toBeInTheDocument();
    expect(screen.getByText("Feedback")).toBeInTheDocument();
  });

  it("renders each section component exactly once", async () => {
    const jsx = await HomePage({ params: Promise.resolve({ locale: "en" }) });
    render(jsx);

    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("skills-section")).toBeInTheDocument();
    expect(screen.getByTestId("experience-section")).toBeInTheDocument();
    expect(screen.getByTestId("showcase-section")).toBeInTheDocument();
    expect(screen.getByTestId("feedback-section")).toBeInTheDocument();
  });

  it("renders sections in the same order as the config", async () => {
    const jsx = await HomePage({ params: Promise.resolve({ locale: "en" }) });
    const { container } = render(jsx);

    const testIds = Array.from(container.querySelectorAll("[data-testid]")).map(
      (el) => el.getAttribute("data-testid"),
    );

    expect(testIds).toEqual([
      "about-section",
      "skills-section",
      "experience-section",
      "showcase-section",
      "feedback-section",
    ]);
  });

  it("gives each section's <h2> a matching id for scroll-to-section links", async () => {
    const jsx = await HomePage({ params: Promise.resolve({ locale: "en" }) });
    const { container } = render(jsx);

    expect(container.querySelector("#about")).toBeInTheDocument();
    expect(container.querySelector("#skills")).toBeInTheDocument();
  });
});
