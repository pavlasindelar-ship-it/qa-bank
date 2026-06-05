import { homeTest } from '../../core/fixtures/home-fixtures';
import { DashboardPage } from '../../model/pages/dashboard.page';
import { RegisterPage } from '../../model/pages/register.page';
import { DashboardVerification } from '../../model/verifications/dashboard.verification';
import { RegisterVerification } from '../../model/verifications/register.verification';

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

  homeTest('Login with valid credentials', async ({ homePage, page, t }) => {
    await homePage.fillUserName();
    await homePage.fillPassword();
    await homePage.clickLoginButton();
    const dashboardPage = new DashboardPage(page, t);
    const dashboardVerification = new DashboardVerification(page, t, dashboardPage.selectors);
    await dashboardVerification.assertAccountsOverview();
  });

});
