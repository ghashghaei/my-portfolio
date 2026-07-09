import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoreTooltip from "./CoreTooltip";

describe("CoreTooltip", () => {
  it("renders the children content", () => {
    render(
      <CoreTooltip text="Helpful info">
        <button>Hover me</button>
      </CoreTooltip>,
    );

    expect(
      screen.getByRole("button", { name: "Hover me" }),
    ).toBeInTheDocument();
  });

  it("renders the tooltip text in the DOM (even though it's visually hidden until hover)", () => {
    render(
      <CoreTooltip text="Helpful info">
        <span>Trigger</span>
      </CoreTooltip>,
    );

    expect(screen.getByText("Helpful info")).toBeInTheDocument();
  });

  it("applies the 'top' position classes by default", () => {
    render(
      <CoreTooltip text="Top tooltip">
        <span>Trigger</span>
      </CoreTooltip>,
    );

    const tooltip = screen.getByText("Top tooltip");
    expect(tooltip.className).toContain("bottom-full");
  });

  it("applies the correct classes when a different position is passed", () => {
    render(
      <CoreTooltip text="Right tooltip" position="right">
        <span>Trigger</span>
      </CoreTooltip>,
    );

    const tooltip = screen.getByText("Right tooltip");
    expect(tooltip.className).toContain("left-full");
  });

  it("supports React nodes as the tooltip text, not just strings", () => {
    render(
      <CoreTooltip text={<strong>Bold info</strong>}>
        <span>Trigger</span>
      </CoreTooltip>,
    );

    expect(screen.getByText("Bold info").tagName).toBe("STRONG");
  });
});
