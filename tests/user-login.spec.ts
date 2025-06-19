import { test, expect } from '@playwright/test';
const baseURL = 'https://www.saucedemo.com/';
// User Login Tests
test.describe('User Login Tests', () => {
    test('User can login website ', async ({ page }) => {
        await page.goto(baseURL);
        await page.locator('[data-test="login-container"] div').filter({ hasText: 'Login' }).first().click();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="title"]').click();
        expect(page.locator('[data-test="title"]')).toHaveText('Products');
    });

    test('User login with username wrong ', async ({ page }) => {
        await page.goto(baseURL);
        expect(page.getByText('Swag Labs')).toBeVisible();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('Wisanu');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('User login with password wrong', async ({ page }) => {
        await page.goto(baseURL);
        expect(page.getByText('Swag Labs')).toBeVisible();
        await page.locator('[data-test="login-container"] div').filter({ hasText: 'Login' }).first().click();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('1234');
        await page.locator('[data-test="login-button"]').click();
        expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});
