import { homeTest } from '../core/fixtures/home-fixtures';
import { HomeVerification } from '../model/verifications/home.verification';
import { RegisterVerification } from '../model/verifications/register.verification';

homeTest.describe('Home page tests', () => {

  homeTest('Verification that home page is displayed correctly', async ({ homePage, page, t }) => {

    const homeVerification = new HomeVerification(page, t);
    await homeVerification.assertTitle();
    await homeVerification.assertImageLogoName();
    await homeVerification.assertSubTitle();
  });

  homeTest('Verification that register button works correctly', async ({ homePage, page, t }) => {

    await homePage.clickRegisterLink();
    const registerVerification = new RegisterVerification(page, t);
    await registerVerification.assertSigningUpTitle();
  });

});