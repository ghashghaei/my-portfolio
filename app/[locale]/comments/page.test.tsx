import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import fs from "fs/promises";
import CommentsPage from "./page";

vi.mock("fs/promises", () => ({
  default: {
    readFile: vi.fn(),
    writeFile: vi.fn(),
  },
}));

const mockedFs = vi.mocked(fs, true);

vi.mock("@/app/lib/getLocale", () => ({
  getLocale: () => ({
    comments: {
      title: "User Comments",
      empty: "No comments yet.",
      backToHome: "Back to Home",
    },
  }),
}));

beforeEach(() => {
  vi.resetAllMocks();
});

describe("CommentsPage", () => {
  it("shows the empty state when there are no comments", async () => {
    mockedFs.readFile.mockResolvedValue(JSON.stringify({ comments: [] }));

    const jsx = await CommentsPage({
      params: Promise.resolve({ locale: "en" }),
    });
    render(jsx);

    expect(screen.getByText("No comments yet.")).toBeInTheDocument();
  });

  it("renders each comment's message, star rating, and date", async () => {
    mockedFs.readFile.mockResolvedValue(
      JSON.stringify({
        comments: [
          {
            rating: 3,
            message: "Great site!",
            createdAt: "2026-01-01T00:00:00.000Z",
          },
        ],
      }),
    );

    const jsx = await CommentsPage({
      params: Promise.resolve({ locale: "en" }),
    });
    render(jsx);

    expect(screen.getByText("Great site!")).toBeInTheDocument();
    expect(screen.getByText("⭐⭐⭐")).toBeInTheDocument();
  });

  it("shows the most recently added comment first (reversed order)", async () => {
    mockedFs.readFile.mockResolvedValue(
      JSON.stringify({
        comments: [
          {
            rating: 5,
            message: "First comment",
            createdAt: "2026-01-01T00:00:00.000Z",
          },
          {
            rating: 4,
            message: "Second comment",
            createdAt: "2026-02-01T00:00:00.000Z",
          },
        ],
      }),
    );

    const jsx = await CommentsPage({
      params: Promise.resolve({ locale: "en" }),
    });
    const { container } = render(jsx);

    const messages = Array.from(container.querySelectorAll("p")).map(
      (p) => p.textContent,
    );

    expect(messages[0]).toBe("Second comment");
    expect(messages[1]).toBe("First comment");
  });

  it("has a back-to-home link pointing to the correct locale", async () => {
    mockedFs.readFile.mockResolvedValue(JSON.stringify({ comments: [] }));

    const jsx = await CommentsPage({
      params: Promise.resolve({ locale: "de" }),
    });
    render(jsx);

    expect(screen.getByRole("link", { name: /Back to Home/i })).toHaveAttribute(
      "href",
      "/de",
    );
  });

  it("falls back to an empty list when the file read fails", async () => {
    mockedFs.readFile.mockRejectedValue(new Error("ENOENT"));

    const jsx = await CommentsPage({
      params: Promise.resolve({ locale: "en" }),
    });
    render(jsx);

    expect(screen.getByText("No comments yet.")).toBeInTheDocument();
  });
});
