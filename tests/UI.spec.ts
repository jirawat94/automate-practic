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
    await expect(
      page.getByRole("heading", { name: "New User Signup!" })
    ).toBeVisible();
  });
  test('Verify that "ENTER ACCOUNT INFORMATION" is visible', async ({
    page,
  }) => {
    const getNewUserSignupform = page.locator(".signup-form").locator("form");
    const getnameInput = getNewUserSignupform.getByRole("textbox", {
      name: "name",
    });
    const getEmailInput = getNewUserSignupform.getByRole("textbox", {
      name: "email",
    });
    const accName = "skyy";
    const accEmail = "test@test8";
    await page.getByText(" Signup / Login").click();
    await getnameInput.fill(accName);
    await getEmailInput.fill(accEmail);
    await page.getByRole("button", { name: "Signup" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/signup");
    await expect(
      page.getByRole("heading", { name: "Enter Account Information" })
    ).toBeVisible();
  });
  test('Verify that "ACCOUNT CREATED!" is visible', async ({ page }) => {
    const getNewUserSignupform = page.locator(".signup-form").locator("form");
    const getLoginform = page.locator(".login-form").locator("form");
    const getnameInput = getNewUserSignupform.getByRole("textbox", {
      name: "name",
    });
    const getEmailInput = getNewUserSignupform.getByRole("textbox", {
      name: "email",
    });
    const accName = "test9";
    const accEmail = "test@test26";
    const firstname = "John";
    const lastname = "robert";
    const company = "veryrich co'ltd";
    const address = " 15m4";
    const address2 = "bangken";
    const state = "JatuJuck";
    const city = "Bangkok";
    const zipcode = "76000";
    const mobile = "08654326";
    await page.getByText(" Signup / Login").click();
    await getnameInput.fill(accName);
    await getEmailInput.fill(accEmail);
    await getNewUserSignupform.getByRole("button", { name: "Signup" }).click();
    await getLoginform.getByRole("radio", { name: "Mr." }).check();
    await getLoginform
      .getByRole("textbox", { name: "password" })
      .fill("test5678");
    await getLoginform.locator('select[name="days"]').selectOption("5");
    await getLoginform
      .locator('select[name="months"]')
      .selectOption({ label: "June" });
    await getLoginform.locator('select[name="years"]').selectOption("1990");
    await getLoginform
      .getByRole("checkbox", { name: "Sign up for our newsletter!" })
      .check();
    await getLoginform
      .getByRole("checkbox", {
        name: "Receive special offers from our partners!",
      })
      .check();
    await getLoginform
      .getByRole("textbox", { name: "First name " })
      .fill(firstname);
    await getLoginform
      .getByRole("textbox", { name: "Last name " })
      .fill(lastname);
    await getLoginform.locator("#company").fill(company);
    await getLoginform.locator("#address1").fill(address);
    await getLoginform
      .getByRole("textbox", { name: "Address 2 " })
      .fill(address2);
    await getLoginform.getByRole("textbox", { name: "State" }).fill(state);
    await getLoginform.locator("#city").fill(city);
    await getLoginform.locator("#zipcode").fill(zipcode);
    await getLoginform
      .getByRole("textbox", { name: "Mobile Number" })
      .fill(mobile);
    await getLoginform
      .locator('select[name="country"]')
      .selectOption({ label: "Singapore" });
    await getLoginform.getByRole("button", { name: "Create Account" }).click();
    await expect(page).toHaveURL(
      "https://automationexercise.com/account_created"
    );
    await expect(
      page.getByRole("heading", { name: "Account Created!" })
    ).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
    await expect(page.getByText(`Logged in as ${accName}`)).toBeVisible();
    await page.getByText("Delete Account").click();
    await expect(
      page.getByRole("heading", { name: "Account Deleted!" })
    ).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
  });
});
