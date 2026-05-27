import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";


export class DashboardPage {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { }

    async assertAccountSuccessfullyCreated() {
        await expect(this.page.getByText("Your account was created successfully. You are now logged in.")).toBeVisible();
    }

    async clickOpenNewAccountLink() {
        await this.page.getByText("Open New Account").click();
    }

    async assertWhatTypeOfAccount() {
        await expect(this.page.getByText("What type of account would you like to open?")).toBeVisible();
    }
}