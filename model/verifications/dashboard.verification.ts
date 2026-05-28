import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";
import { DashboardPageSelectors } from "../pages/dashboard.page";

export class DashboardVerification {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string,
        public readonly selectors: DashboardPageSelectors) { }

    async assertAccountSuccessfullyCreated() {
        await expect(this.page.getByText(this.selectors.successMessageSelector)).toBeVisible();
    }

    async assertWhatTypeOfAccount() {
        await expect(this.page.getByText(this.selectors.accountTypeHeadingSelector)).toBeVisible();
    }
}
