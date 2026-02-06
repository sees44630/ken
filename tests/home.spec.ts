import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/BOMA STORE/);
});

test('homepage loads with hero section', async ({ page }) => {
  await page.goto('/');
  
  // Verify the hero section is visible
  await expect(page.locator('text=BOMA STORE')).toBeVisible();
});

test('can navigate to services section', async ({ page }) => {
  await page.goto('/');
  
  // Click on the services link in the navbar
  await page.click('a[href="#services"]');
  
  // Verify services section is now in view
  await expect(page.locator('#services')).toBeVisible();
});
