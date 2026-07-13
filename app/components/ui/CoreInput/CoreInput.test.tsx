import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoreInput from "./CoreInput";

describe("CoreInput", () => {
  it("renders an <input> element by default", () => {
    render(<CoreInput placeholder="Type here" />);
    const field = screen.getByPlaceholderText("Type here");

    expect(field.tagName).toBe("INPUT");
  });

  it("renders a <textarea> when as='textarea' is passed", () => {
    render(<CoreInput as="textarea" placeholder="Write a message" />);
    const field = screen.getByPlaceholderText("Write a message");

    expect(field.tagName).toBe("TEXTAREA");
  });

  it("renders the label when provided", () => {
    render(<CoreInput label="Email address" placeholder="you@example.com" />);
    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  it("shows the error message and marks the field as invalid", () => {
    render(<CoreInput placeholder="Email" error="Email is required" />);
    const field = screen.getByPlaceholderText("Email");

    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(field).toHaveAttribute("aria-invalid", "true");
  });

  it("does not mark the field as invalid when there is no error", () => {
    render(<CoreInput placeholder="Email" />);
    const field = screen.getByPlaceholderText("Email");

    expect(field).toHaveAttribute("aria-invalid", "false");
  });

  it("forwards native input props like value and onChange", async () => {
    const user = userEvent.setup();
    let typedValue = "";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      typedValue = e.target.value;
    };

    render(<CoreInput placeholder="Name" onChange={handleChange} />);
    const field = screen.getByPlaceholderText("Name");

    await user.type(field, "Parastoo");

    expect(typedValue).toBe("Parastoo");
  });

  it("applies extra className passed via props", () => {
    render(<CoreInput placeholder="Custom" className="my-custom-class" />);
    const field = screen.getByPlaceholderText("Custom");

    expect(field.className).toContain("my-custom-class");
  });
});
