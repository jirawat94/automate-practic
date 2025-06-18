import { test, expect } from "@playwright/test";
 test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
  });

test.describe("Register User", () => {
  test("home page is visible", async ({ page }) => {
    await expect(page).toHaveTitle("Automation Exercise");
  });
  test("New User Sightup /login", async ({ page }) => {
    await page.getByText(" Signup / Login").click();
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
   await expect (page.locator(".signup-form")).toHaveText("New User Signup!")
  });
});
