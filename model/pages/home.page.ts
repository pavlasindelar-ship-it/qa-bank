import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export class HomePage {

    constructor(
    private readonly page: Page,
    private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { }

    async goto() {
        await this.page.goto("/");
    }

    async clickRegisterLink() {
        await this.page.getByText(this.t("homePage.registerLink")).click();
    }
}
