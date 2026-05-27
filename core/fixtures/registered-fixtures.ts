import { DashboardPage } from "../../model/pages/dashboard.page";
import { DashboardVerification } from "../../model/verifications/dashboard.verification";
import { registrationTest } from "./register.fixtures";

export const registeredTest = registrationTest.extend<{
    dashboardPage: DashboardPage
    dashboardVerification: DashboardVerification
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
        await use(new DashboardPage(page, t));
    },
    dashboardVerification: async ({ page, t }, use) => {
        const dashboardVerification = new DashboardVerification(page, t);
        await use(dashboardVerification);
    }
});