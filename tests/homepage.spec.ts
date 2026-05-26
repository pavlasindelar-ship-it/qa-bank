import { expect } from '@playwright/test';
import { homeTest } from '../core/fixtures/home-fixtures';
import { RegisterPage } from '../model/pages/register.page';

homeTest.describe('Home page tests', () => {

  homeTest('Verification that home page is displayed correctly', async ({ homePage }) => {

    await homePage.assertTitle();
    await homePage.assertImageLogoName();
    await homePage.assertSubTitle();
  });

  homeTest('Verification that register button works correctly', async ({ homePage, page, t }) => {

    await homePage.clickRegisterLink();
    const registerPage = new RegisterPage(page, t);
    await registerPage.assertSigningUpTitle();
  });

});