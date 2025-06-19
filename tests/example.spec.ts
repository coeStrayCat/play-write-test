import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.goto('https://workshop-saucedemo.vercel.app/login');
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('wisanu');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('123456');
});


test('User can login web browser', async ({ page }) => {
  await page.goto('https://workshop-saucedemo.vercel.app/login');
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  // Verify successful login by checking the presence of the page title ได้ 3 แบบ
  await expect(page.getByTestId('page-title')).toBeVisible();
  await expect(page.getByTestId('page-title')).toHaveText('Products');
  await expect(page.getByTestId('page-title')).toContainText('P');
    
});