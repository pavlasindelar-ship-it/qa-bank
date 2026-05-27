import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";


export class DashboardPage {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { }

    async assertAccountSuccessfullyCreated() {
        await expect(this.page.getByText(this.t("dashboardPage.successMessage"))).toBeVisible();
    }

    async clickOpenNewAccountLink() {
        await this.page.getByText(this.t("dashboardPage.openNewAccountLink")).click();
    }

    async assertWhatTypeOfAccount() {
        await expect(this.page.getByText(this.t("dashboardPage.accountTypeHeading"))).toBeVisible();
    }
}