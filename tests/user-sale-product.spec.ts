import { test, expect } from '@playwright/test';
const baseURL = 'https://www.saucedemo.com/';

// test('User sale one product', async ({ page }) => {
//   await page.goto(baseURL);
//   expect(await page.getByText('Swag Labs')).toBeVisible();
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();

//   expect(await page.locator('[data-test="title"]')).toHaveText('Products');
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();

//   expect(await page.locator('[data-test="title"]')).toHaveText('Your Cart');
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').click();
//   await page.locator('[data-test="firstName"]').fill('Wisanu');
//   await page.locator('[data-test="lastName"]').click();
//   await page.locator('[data-test="lastName"]').fill('Rungkrathoke');
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill('30190');
//   await page.locator('[data-test="continue"]').click();

//   expect(await page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
//   await page.locator('[data-test="total-info-label"]').click();
//   await page.locator('[data-test="finish"]').click();
//   await page.locator('[data-test="complete-header"]').click();
//   await page.locator('[data-test="back-to-products"]').click();
  
//   expect(await page.locator('[data-test="title"]')).toHaveText('Products');
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();
//   expect(await page.getByText('Swag Labs')).toBeVisible();
//   });

// test('User sale two products', async ({ page }) => {
//   await page.goto(baseURL);
//   expect(await page.getByText('Swag Labs')).toBeVisible();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();

//   expect(await page.locator('[data-test="title"]')).toHaveText('Products');
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();

//   expect(await page.locator('[data-test="title"]')).toHaveText('Your Cart');
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').click();
//   await page.locator('[data-test="firstName"]').fill('Wisanu');
//   await page.locator('[data-test="lastName"]').click();
//   await page.locator('[data-test="lastName"]').fill('Rungkrathoke');
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill('30190');
//   await page.locator('[data-test="continue"]').click();

//   expect(await page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
//   await page.locator('[data-test="finish"]').click();
//   await page.locator('[data-test="complete-header"]').click();
//   await page.locator('[data-test="back-to-products"]').click();

//   expect(await page.locator('[data-test="title"]')).toHaveText('Products');
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();
//   expect(await page.getByText('Swag Labs')).toBeVisible();
// });


test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  expect(await page.locator('[data-test="inventory-item"]').count()).toBe(4);

  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Wisanu');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Runkrathoke');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('30190');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="complete-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="title"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.getByText('Swag Labs').click();
});