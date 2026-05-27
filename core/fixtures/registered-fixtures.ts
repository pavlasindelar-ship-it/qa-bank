import { DashboardPage } from "../../model/pages/dashboard.page";
import { registrationTest } from "./register.fixtures";

export const registeredTest = registrationTest.extend<{
    dashboardPage: DashboardPage
}>({
    dashboardPage: async ({ page, registerPage, t }, use) => {
        await registerPage.fillFirstName();
        await registerPage.fillLastName();
        await registerPage.fillAddress();
        await registerPage.fillCity();
        await registerPage.fillState();
        await registerPage.fillZipCode();
        await registerPage.fillPhoneNumber();
        await registerPage.fillSocialSecurityNumber();
        await registerPage.fillUsername();
        await registerPage.fillPassword();
        await registerPage.fillPasswordConfirmation();
        await registerPage.clickRegisterButton();
        const dashboardPage = new DashboardPage(page, t);
        await dashboardPage.assertAccountSuccessfullyCreated();
        await use(dashboardPage);
    }
});