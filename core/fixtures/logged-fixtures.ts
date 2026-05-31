import { homeTest } from "./home-fixtures";
import { DashboardPage } from "../../model/pages/dashboard.page";
import { DashboardVerification } from "../../model/verifications/dashboard.verification";

export const loggedTest = homeTest.extend<{
    dashboardPage: DashboardPage;
    dashboardVerification: DashboardVerification;

}>({
    dashboardPage: async ({ page, homePage, t }, use) => {
        await homePage.fillUserName();
        await homePage.fillPassword();
        await homePage.clickLoginButton();
        const dashboardPage = new DashboardPage(page, t);
        await use(dashboardPage);
    },
    dashboardVerification: async ({ page, t, dashboardPage }, use) => {
        const dashboardVerification = new DashboardVerification(page, t, dashboardPage.selectors);
        await dashboardVerification.assertAccountsOverview();
        await use(dashboardVerification);
    }
});