import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoreAccordion from "./CoreAccordion";

describe("CoreAccordion", () => {
  it("renders the title and children content", () => {
    render(
      <CoreAccordion title="Frequently Asked Question">
        <p>This is the answer.</p>
      </CoreAccordion>,
    );

    expect(screen.getByText("Frequently Asked Question")).toBeInTheDocument();
    expect(screen.getByText("This is the answer.")).toBeInTheDocument();
  });

  it("starts closed by default (grid-rows-[0fr] class applied)", () => {
    const { container } = render(
      <CoreAccordion title="Question">
        <p>Answer</p>
      </CoreAccordion>,
    );

    const contentWrapper = container.querySelector(".grid");
    expect(contentWrapper?.className).toContain("grid-rows-[0fr]");
  });

  it("opens when the header is clicked (grid-rows-[1fr] class applied)", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CoreAccordion title="Question">
        <p>Answer</p>
      </CoreAccordion>,
    );

    await user.click(screen.getByText("Question"));

    const contentWrapper = container.querySelector(".grid");
    expect(contentWrapper?.className).toContain("grid-rows-[1fr]");
  });

  it("closes again when the header is clicked a second time", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CoreAccordion title="Question">
        <p>Answer</p>
      </CoreAccordion>,
    );

    const header = screen.getByText("Question");
    await user.click(header);
    await user.click(header);

    const contentWrapper = container.querySelector(".grid");
    expect(contentWrapper?.className).toContain("grid-rows-[0fr]");
  });

  it("rotates the chevron icon when open", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CoreAccordion title="Question">
        <p>Answer</p>
      </CoreAccordion>,
    );

    const chevron = container.querySelector("svg");
    expect(chevron?.getAttribute("class")).not.toContain("rotate-180");

    await user.click(screen.getByText("Question"));

    expect(chevron?.getAttribute("class")).toContain("rotate-180");
  });

  it("applies the correct width class when width prop is passed", () => {
    const { container } = render(
      <CoreAccordion title="Question" width="full">
        <p>Answer</p>
      </CoreAccordion>,
    );

    expect(container.querySelector("div")?.className).toBeTruthy();
  });
});
