import { homeTest } from '../core/fixtures/home-fixtures';
import { RegisterPage } from '../model/pages/register.page';
import { RegisterVerification } from '../model/verifications/register.verification';

homeTest.describe('Home page tests', () => {

  homeTest('Verification that home page is displayed correctly', async ({ homePage, homeVerification}) => {
    await homeVerification.assertTitle();
    await homeVerification.assertImageLogoName();
    await homeVerification.assertSubTitle();
  });

  homeTest('Verification that register button works correctly', async ({ homePage, page, t }) => {
    await homePage.clickRegisterLink();
    const registerPage = new RegisterPage(page, t);
    const registerVerification = new RegisterVerification(page, t, registerPage.selectors);
    await registerVerification.assertSigningUpTitle();
  });

});
