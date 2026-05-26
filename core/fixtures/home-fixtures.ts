import { test } from "./qa-fixtures";
import { HomePage } from "../../model/pages/home.page";

export const homeTest = test.extend<{
    homePage: HomePage
}>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await use(homePage);
    }
});