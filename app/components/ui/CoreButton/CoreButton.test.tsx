import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoreButton from "./CoreButton";

describe("CoreButton", () => {
  it("renders the children text passed to it", () => {
    render(<CoreButton>Click me</CoreButton>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<CoreButton onClick={handleClick}>Submit</CoreButton>);
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when the disabled prop is passed", () => {
    render(<CoreButton disabled>Disabled</CoreButton>);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });

  it("applies extra className passed via props", () => {
    render(<CoreButton className="custom-class">Styled</CoreButton>);
    expect(screen.getByRole("button", { name: "Styled" })).toHaveClass(
      "custom-class",
    );
  });
});
