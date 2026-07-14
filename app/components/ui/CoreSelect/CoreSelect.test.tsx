import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoreDropdown from "./CoreSelect";

const items = [
  { label: "Option A", value: "/a" },
  { label: "Option B", value: "/b" },
];

describe("CoreDropdown", () => {
  it("renders the label but keeps the menu closed by default", () => {
    render(<CoreDropdown label="Choose" items={items} />);

    expect(screen.getByText("Choose")).toBeInTheDocument();
    expect(screen.queryByText("Option A")).not.toBeInTheDocument();
    expect(screen.queryByText("Option B")).not.toBeInTheDocument();
  });

  it("opens the menu when the label is clicked", async () => {
    const user = userEvent.setup();
    render(<CoreDropdown label="Choose" items={items} />);

    await user.click(screen.getByText("Choose"));

    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("closes the menu when the label is clicked a second time", async () => {
    const user = userEvent.setup();
    render(<CoreDropdown label="Choose" items={items} />);

    const trigger = screen.getByText("Choose");
    await user.click(trigger); // باز می‌شه
    await user.click(trigger); // دوباره بسته می‌شه

    expect(screen.queryByText("Option A")).not.toBeInTheDocument();
  });

  it("closes the menu after clicking an item", async () => {
    const user = userEvent.setup();
    render(<CoreDropdown label="Choose" items={items} />);

    await user.click(screen.getByText("Choose"));
    await user.click(screen.getByText("Option A"));

    expect(screen.queryByText("Option A")).not.toBeInTheDocument();
    expect(screen.queryByText("Option B")).not.toBeInTheDocument();
  });

  it("renders each item as a link pointing to the correct value", async () => {
    const user = userEvent.setup();
    render(<CoreDropdown label="Choose" items={items} />);

    await user.click(screen.getByText("Choose"));

    expect(screen.getByRole("link", { name: "Option A" })).toHaveAttribute(
      "href",
      "/a",
    );
    expect(screen.getByRole("link", { name: "Option B" })).toHaveAttribute(
      "href",
      "/b",
    );
  });

  it("renders an empty menu without crashing when items is an empty array", async () => {
    const user = userEvent.setup();
    render(<CoreDropdown label="Choose" items={[]} />);

    await user.click(screen.getByText("Choose"));

    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
});
