import { test, expect } from "@playwright/test";

test("should contain h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Make your website wonderful");
});
