import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("redirects the root path to a locale-prefixed URL", async ({ page }) => {
    await page.goto("/");

    // middleware.ts باید کاربر رو از "/" به "/en" یا "/de" هدایت کنه
    await expect(page).toHaveURL(/\/(en|de)$/);
  });

  test("loads the English homepage directly", async ({ page }) => {
    await page.goto("/en");

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator("h2").first()).toBeVisible();
  });

  test("loads the German homepage directly", async ({ page }) => {
    await page.goto("/de");

    await expect(page).toHaveURL(/\/de$/);
    await expect(page.locator("h2").first()).toBeVisible();
  });

  test("renders all main sections on the page", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#skills")).toBeVisible();
    await expect(page.locator("#experiences")).toBeVisible();
    await expect(page.locator("#showcase")).toBeVisible();
    await expect(page.locator("#feedback")).toBeVisible();
  });
});
