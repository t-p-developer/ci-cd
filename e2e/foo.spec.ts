import { test, expect } from '@playwright/test';

test('button existence and count number', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'count is 0' }).click();
    await page.getByRole('button', { name: 'count is 1' }).click();
});

