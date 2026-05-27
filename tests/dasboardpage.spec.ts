import { registeredTest } from '../core/fixtures/registered-fixtures';
import { DashboardPage } from '../model/pages/dashboard.page';
import { DashboardVerification } from '../model/verifications/dashboard.verification';

registeredTest.describe('Dashboard page', () => {

    registeredTest('Open new Account', async ({ dashboardPage, page, t }) => {

       const dashboardVerification = new DashboardVerification(page, t);
       await dashboardPage.clickOpenNewAccountLink();
       await dashboardVerification.assertWhatTypeOfAccount();
    });
});