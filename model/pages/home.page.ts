import { Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export type HomePageSelectors = {
    registerLinkSelector: string;
    titleSelector: string;
    imageLogoNameSelector: string;
    subTitleSelector: string;
}

export class HomePage {
    public readonly selectors: HomePageSelectors;

    constructor(
    private readonly page: Page,
    private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) {
        this.selectors = {
            registerLinkSelector: this.t("homePage.registerLink"),
            titleSelector: this.t("homePage.title"),
            imageLogoNameSelector: this.t("homePage.imageLogoName"),
            subTitleSelector: this.t("homePage.subtitle")
        };
     }

    async goto() {
        await this.page.goto("/");
    }

    async clickRegisterLink() {
        await this.page.getByText(this.selectors.registerLinkSelector).click();
    }
}
