import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";
import { DashboardPageSelectors } from "../pages/dashboard.page";

export class DashboardVerification {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string,
        public readonly selectors: DashboardPageSelectors) { }

    async assertRegistrationSuccessfullyCreated() {
        await expect(this.page.getByText(this.selectors.successMessageSelector)).toBeVisible();
    }

    async assertWhatTypeOfAccount() {
        await expect(this.page.getByText(this.selectors.accountTypeHeadingSelector)).toBeVisible();
    }

    async assertAccountOpened() {
        await expect(this.page.getByRole("heading", { name: this.selectors.accountOpenedMessageSelector, level: 1})).toBeVisible();
    }

    async assertAccountsOverview() {
        await expect(this.page.getByRole("heading", { name: this.selectors.accountsOverviewTitleSelector, level: 1})).toBeVisible();
    }

    async assertTransferSuccessfulMessage() {
        await expect(this.page.getByText(this.t("dashboardPage.transferSuccessfulMessage"))).toBeVisible();
    }

    async assertLatestTransactionOnDebitSide(amount: string) {
        const latestTransaction = this.page.locator(this.selectors.latestTransactionOnDebitSideSelector).last();
        await expect(latestTransaction).toContainText(amount);
    }

     async assertLatestTransactionOnCreditSide(amount: string) {
        const latestTransaction = this.page.locator(this.selectors.latestTransactionOnCreditSideSelector).last();
        await expect(latestTransaction).toContainText(amount);
    }

}
