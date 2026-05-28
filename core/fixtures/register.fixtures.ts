import { RegisterPage } from "../../model/pages/register.page";
import { RegisterVerification } from "../../model/verifications/register.verification";
import { homeTest } from "./home-fixtures";

export const registrationTest = homeTest.extend<{
    registerPage: RegisterPage
    registerVerification: RegisterVerification
}>({
    registerPage: async ({ page, homePage, t }, use) => {
        homePage.clickRegisterLink();
        const registerPage = new RegisterPage(page, t);
        await use(registerPage);
    },

    registerVerification: async ({ page, t, registerPage }, use) => {
        const registerVerification = new RegisterVerification(page, t, registerPage.selectors);
        await use(registerVerification);
    }
});