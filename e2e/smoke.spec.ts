import { test, expect } from '@playwright/test'

test('app opens', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/.+/)
})
