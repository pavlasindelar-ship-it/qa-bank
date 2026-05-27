import { test } from "./qa-fixtures";
import { HomePage } from "../../model/pages/home.page";

export const homeTest = test.extend<{
    homePage: HomePage
}>({
    homePage: async ({ page, t }, use) => {
        const homePage = new HomePage(page, t);
        await homePage.goto();
        await use(homePage);
    }
});