import { registeredTest } from '../core/fixtures/registered-fixtures';

registeredTest.describe('Dashboard page', () => {

    registeredTest('Open new Account', async ({ dashboardPage, dashboardVerification}) => {
        await dashboardPage.clickOpenNewAccountLink();
        await dashboardVerification.assertWhatTypeOfAccount();
    });

});
