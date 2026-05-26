import { RegisterPage } from "../../model/pages/register.page";
import { homeTest } from "./home-fixtures";

export const registrationTest = homeTest.extend<{
    registerPage: RegisterPage
}>({
    registerPage: async ({ page, homePage, t }, use) => {
        homePage.clickRegisterLink();
        const registerPage = new RegisterPage(page, t);
        await use(registerPage);
    }
});