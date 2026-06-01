import { loggedTest } from '../core/fixtures/logged-fixtures';
import { registeredTest } from '../core/fixtures/registered-fixtures';

registeredTest.describe('Dashboard page', () => {

    registeredTest('Open new Account', async ({ dashboardPage, dashboardVerification }) => {
        await dashboardPage.clickOpenNewAccountLink();
        await dashboardVerification.assertWhatTypeOfAccount();
        await dashboardPage.clickOpenNewAccountButton();
        await dashboardVerification.assertAccountOpened();
    });

    registeredTest("Transfer money from one account to another", async ({ dashboardPage, dashboardVerification }) => {
        const amountToTransfer = "200";
        await dashboardPage.clickOpenNewAccountLink();
        await dashboardPage.clickOpenNewAccountButton();

        await dashboardPage.clickAccountsOverviewLink();
        const accountNumbers = await dashboardPage.findAllAccountsNumbers();

        await dashboardPage.clickTransferFundsLink();
        await dashboardPage.fillAmountToTransfer(amountToTransfer);
        await dashboardPage.chooseFromAccount(accountNumbers[0]);
        await dashboardPage.chooseToAccount(accountNumbers[1]);
        await dashboardPage.clickTransferButton();
        await dashboardVerification.assertTransferSuccessfulMessage();

        await dashboardPage.clickAccountsOverviewLink();
        await dashboardPage.clickAccount(accountNumbers[0]);
        await dashboardVerification.assertLatestTransactionOnDebitSide(amountToTransfer);
        await dashboardPage.clickAccountsOverviewLink();
        await dashboardPage.clickAccount(accountNumbers[1]);
        await dashboardVerification.assertLatestTransactionOnCreditSide(amountToTransfer);
    });

});
