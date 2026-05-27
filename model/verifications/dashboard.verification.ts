import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export class DashboardVerification {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { }

    async assertAccountSuccessfullyCreated() {
        await expect(this.page.getByText(this.t("dashboardPage.successMessage"))).toBeVisible();
    }

    async assertWhatTypeOfAccount() {
        await expect(this.page.getByText(this.t("dashboardPage.accountTypeHeading"))).toBeVisible();
    }
}