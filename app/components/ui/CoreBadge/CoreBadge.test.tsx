import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoreBadge from "./CoreBadge";
import { sizes, variants, roundedStyles } from "./CoreBadge.Styles";

describe("CoreBadge", () => {
  it("renders the label text passed to it", () => {
    render(<CoreBadge label="New" />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies default size, variant, and rounded classes", () => {
    render(<CoreBadge label="Default" />);
    const badge = screen.getByText("Default");

    expect(badge).toHaveClass(sizes["md"]);
    expect(badge).toHaveClass(variants["secondary"]);
    expect(badge).toHaveClass(roundedStyles["full"]);
  });

  it("applies the correct classes for a given size, variant, and rounded prop", () => {
    render(
      <CoreBadge label="Custom" size="sm" variant="primary" rounded="md" />,
    );
    const badge = screen.getByText("Custom");

    expect(badge).toHaveClass(sizes["sm"]);
    expect(badge).toHaveClass(variants["primary"]);
    expect(badge).toHaveClass(roundedStyles["md"]);
  });

  it("renders the icon before the label when iconPosition is left", () => {
    render(
      <CoreBadge
        label="Icon Left"
        icon={<span data-testid="icon">*</span>}
        iconPosition="left"
      />,
    );

    const badge = screen.getByText("Icon Left").closest("span");
    const icon = screen.getByTestId("icon");

    expect(badge).toContainElement(icon);
    expect(badge?.firstChild).toBe(icon);
  });

  it("renders the icon after the label when iconPosition is right", () => {
    render(
      <CoreBadge
        label="Icon Right"
        icon={<span data-testid="icon">*</span>}
        iconPosition="right"
      />,
    );

    const badge = screen.getByText("Icon Right").closest("span");
    const icon = screen.getByTestId("icon");

    expect(badge).toContainElement(icon);
    expect(badge?.lastChild).toBe(icon);
  });

  it("does not render an icon when none is passed", () => {
    render(<CoreBadge label="No Icon" />);
    const badge = screen.getByText("No Icon").closest("span");

    expect(badge?.childNodes.length).toBe(1);
  });
});
