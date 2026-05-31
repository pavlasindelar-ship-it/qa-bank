import { Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export type DashboardPageSelectors = {
    openNewAccountLinkSelector: string;
    successMessageSelector: string;
    accountTypeHeadingSelector: string;
    openNewAccountButtonSelector: string;
    accountOpenedMessageSelector: string;
    accountsOverviewTitleSelector: string;
    tableIdSelector: string;
    transferFundsLinkSelector: string;
    amountToTransferSelector: string;
    fromAccountSelector: string;
    toAccountSelector: string;
    latestTransactionSelector: string;
}

export class DashboardPage {
    public readonly selectors: DashboardPageSelectors;

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) {
        this.selectors = {
            openNewAccountLinkSelector: this.t("dashboardPage.openNewAccountLink"),
            successMessageSelector: this.t("dashboardPage.successMessage"),
            accountTypeHeadingSelector: this.t("dashboardPage.accountTypeHeading"),
            openNewAccountButtonSelector: this.t("dashboardPage.openNewAccountButton"),
            accountOpenedMessageSelector: this.t("dashboardPage.accountOpenedMessage"),
            accountsOverviewTitleSelector: this.t("dashboardPage.accountsOverviewTitle"),
            tableIdSelector: "#accountTable tbody a",
            transferFundsLinkSelector: this.t("dashboardPage.transferFundsLink"),
            amountToTransferSelector: "input#amount",
            fromAccountSelector: "select#fromAccountId",
            toAccountSelector: "select#toAccountId",
            latestTransactionSelector: "#transactionTable tbody tr"
        };
    }

    async clickOpenNewAccountLink() {
        await this.page.getByText(this.selectors.openNewAccountLinkSelector).click();
    }

    async clickOpenNewAccountButton() {
        await this.page.getByRole("button", { name: this.selectors.openNewAccountButtonSelector }).click();
    }

    async findAllAccountsNumbers(): Promise<string[]> {
        return await this.page.locator(this.selectors.tableIdSelector).allInnerTexts();
    }

    async clickTransferFundsLink() {
        await this.page.getByText(this.selectors.transferFundsLinkSelector).click();
    }

    async fillAmountToTransfer(amount: string = "100") {
        await this.page.locator(this.selectors.amountToTransferSelector).fill(amount);
    }

    async chooseFromAccount(accountNumber: string) {
        await this.page.selectOption(this.selectors.fromAccountSelector, { value: accountNumber });
    }

    async chooseToAccount(accountNumber: string) {
        await this.page.selectOption(this.selectors.toAccountSelector, { value: accountNumber });
    }

    async clickTransferButton() {
        await this.page.getByRole("button", { name: this.t("dashboardPage.transferButton") }).click();
    }

    async clickAccountsOverviewLink() {
        await this.page.getByText(this.t("dashboardPage.accountsOverviewLink")).click();
    }

    async clickFirstAccount() {
        await this.page.locator(this.selectors.tableIdSelector).first().click();
    }

    async clickAccount(accountNumber: string) {
        await this.page.locator(this.selectors.tableIdSelector).filter({ hasText: accountNumber }).click();
    }

}
