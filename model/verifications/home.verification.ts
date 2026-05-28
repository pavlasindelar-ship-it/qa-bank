import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";
import { HomePageSelectors } from "../pages/home.page";

export class HomeVerification {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string,
        public readonly selectors: HomePageSelectors) { }


    async assertTitle() {
        await expect(this.page).toHaveTitle(this.selectors.titleSelector);
    }

    async assertImageLogoName() {
        await expect(this.page.locator("img.logo")).toHaveAttribute("alt", this.selectors.imageLogoNameSelector);
    }

    async assertSubTitle() {
        await expect(this.page.getByText(this.selectors.subTitleSelector)).toBeVisible();
    }

}
