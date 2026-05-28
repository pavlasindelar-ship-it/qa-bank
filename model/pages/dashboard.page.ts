import { Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export type DashboardPageSelectors = {
    openNewAccountLinkSelector: string;
    successMessageSelector: string;
    accountTypeHeadingSelector: string;
}

export class DashboardPage {
    public readonly selectors: DashboardPageSelectors;
    
    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) {
        this.selectors = {
            openNewAccountLinkSelector: this.t("dashboardPage.openNewAccountLink"),
            successMessageSelector: this.t("dashboardPage.successMessage"),
            accountTypeHeadingSelector: this.t("dashboardPage.accountTypeHeading")
        };
    }

    async clickOpenNewAccountLink() {
        await this.page.getByText(this.selectors.openNewAccountLinkSelector).click();
    }
}
