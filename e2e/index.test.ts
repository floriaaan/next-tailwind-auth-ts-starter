import { test, expect } from "@playwright/test";

test("should contain links to other modules", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Make your website wonderful");
});
