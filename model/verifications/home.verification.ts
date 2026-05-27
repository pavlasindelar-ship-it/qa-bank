import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export class HomeVerification {

    constructor(
    private readonly page: Page,
    private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { }


    async assertTitle() {
        await expect(this.page).toHaveTitle(this.t("homePage.title"));
    }
      
    async assertImageLogoName() {
        await expect(this.page.locator("img.logo")).toHaveAttribute("alt", this.t("homePage.imageLogoName"));
    }

    async assertSubTitle() {
        await expect(this.page.getByText(this.t("homePage.subtitle"))).toBeVisible();
    }

}
