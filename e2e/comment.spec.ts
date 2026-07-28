import { test, expect } from "@playwright/test";

test.describe("Comments page", () => {
  test("loads the comments page and shows the page title", async ({ page }) => {
    await page.goto("/en/comments");

    await expect(page.locator("h1")).toBeVisible();
  });

  test("has a working back-to-home link", async ({ page }) => {
    await page.goto("/en/comments");

    await page.getByRole("link", { name: /back to home/i }).click();

    await expect(page).toHaveURL(/\/en$/);
  });

  test("shows either the empty state or a list of real comments", async ({
    page,
  }) => {
    await page.goto("/en/comments");

    const emptyState = page.getByText(/no comments yet/i);
    const commentCards = page.locator(
      ".rounded-2xl.border.border-gray-800.bg-black\\/30",
    );

    const isEmpty = await emptyState.isVisible().catch(() => false);
    if (isEmpty) {
      await expect(emptyState).toBeVisible();
    } else {
      await expect(commentCards.first()).toBeVisible();
    }
  });

  test("loads the German comments page with translated text", async ({
    page,
  }) => {
    await page.goto("/de/comments");

    await expect(page.locator("h1")).toBeVisible();
    await expect(
      page.getByRole("link", { name: /back to home/i }),
    ).not.toBeVisible();
  });
});
