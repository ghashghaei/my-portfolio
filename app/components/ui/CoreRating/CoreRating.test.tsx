import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoreRating from "./CoreRating";

describe("CoreRating", () => {
  it("renders 5 stars by default", () => {
    render(<CoreRating value={0} onChange={() => {}} />);
    expect(screen.getAllByRole("button")).toHaveLength(5);
  });

  it("renders a custom number of stars when max is passed", () => {
    render(<CoreRating value={0} onChange={() => {}} max={3} />);
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  it("fills the correct number of stars based on value", () => {
    render(<CoreRating value={3} onChange={() => {}} />);
    const buttons = screen.getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("★");
    expect(buttons[1]).toHaveTextContent("★");
    expect(buttons[2]).toHaveTextContent("★");
    expect(buttons[3]).toHaveTextContent("☆");
    expect(buttons[4]).toHaveTextContent("☆");
  });

  it("calls onChange with the correct star number when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<CoreRating value={0} onChange={handleChange} />);
    const buttons = screen.getAllByRole("button");

    await user.click(buttons[2]);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(3);
  });
});
