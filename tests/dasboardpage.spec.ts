import { DashboardPage } from '../model/pages/dashboard.page';
import { registeredTest } from '../core/fixtures/registered-fixtures';

registeredTest.describe('Dashboard page', () => {

    registeredTest('Open new Account', async ({ dashboardPage }) => {

       await dashboardPage.clickOpenNewAccountLink();
       await dashboardPage.assertWhatTypeOfAccount();
    });
});