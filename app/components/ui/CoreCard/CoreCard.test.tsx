import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoreCard from "./CoreCard";
import { variants, baseStyles } from "./CoreCard.styles";

describe("CoreCard", () => {
  it("renders the children passed to it", () => {
    render(
      <CoreCard>
        <p>Card content</p>
      </CoreCard>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies the default variant and base styles when no props are passed", () => {
    render(
      <CoreCard>
        <p>Default Card</p>
      </CoreCard>,
    );
    const card = screen.getByText("Default Card").closest("div");

    expect(card).toHaveClass(baseStyles);
    expect(card).toHaveClass(variants["default"]);
  });

  it("applies the correct classes for a given variant", () => {
    render(
      <CoreCard variant="outlined">
        <p>Outlined Card</p>
      </CoreCard>,
    );
    const card = screen.getByText("Outlined Card").closest("div");

    expect(card).toHaveClass(variants["outlined"]);
  });

  it("applies extra className passed via props", () => {
    render(
      <CoreCard className="custom-class">
        <p>Styled Card</p>
      </CoreCard>,
    );
    const card = screen.getByText("Styled Card").closest("div");

    expect(card).toHaveClass("custom-class");
  });

  it("renders multiple children correctly", () => {
    render(
      <CoreCard>
        <h2>Title</h2>
        <p>Description</p>
      </CoreCard>,
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });
});
