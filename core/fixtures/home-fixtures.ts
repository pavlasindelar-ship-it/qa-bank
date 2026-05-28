import { test } from "./qa-fixtures";
import { HomePage } from "../../model/pages/home.page";
import { HomeVerification } from "../../model/verifications/home.verification";

export const homeTest = test.extend<{
    homePage: HomePage
    homeVerification: HomeVerification
}>({
    homePage: async ({ page, t }, use) => {
        const homePage = new HomePage(page, t);
        await homePage.goto();
        await use(homePage);
    },

    homeVerification: async ({ page, t, homePage }, use) => {
        const homeVerification = new HomeVerification(page, t, homePage.selectors);
        await use(homeVerification);
    }
});