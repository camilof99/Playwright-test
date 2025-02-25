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
});

test('test', async ({ page }) => {

  await page.goto('http://mercadolibre.com.co');
  await page.locator('input[id="cb1-edit"]').fill('Iphone');
  await page.keyboard.press('Enter');

  await expect(page.locator('//ol[contains(@class,"ui-search-layout")]')).toBeVisible();
  // await page.pause();

  const titles = await page.locator('//ol[contains(@class,"ui-search-layout")]//li//h2').allInnerTexts();

  console.log('The total number of results is: ', titles.length);
  
  for (let title of titles) {
    console.log('The title is: ', title);
  }

});

test('test 2', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  
});


test('test locators', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  //await page.pause()

  await page.locator('input[class="form"]').fill('algo')
  //await page.pause()

});

test('test locators 2', async ({ page }) => {
  
  await page.goto('https://www.mercadolibre.com.co')
  //await page.getByRole('link', {name: 'Mis compras'}).click()
  await page.getByRole('link', {name: 'Ingresa',  exact: true }).click()
 // await page.pause()

});
