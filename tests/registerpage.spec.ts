import { registrationTest } from '../core/fixtures/register.fixtures';
import { DashboardVerification } from '../model/verifications/dashboard.verification';
import { RegisterVerification } from '../model/verifications/register.verification';

registrationTest.describe('Registration page', () => {

    registrationTest('Verification of empty fields', async ({ registerPage, page, t }) => {

        await registerPage.clickRegisterButton();
        const registerVerification = new RegisterVerification(page, t);
        await registerVerification.assertEmptyFirstName();
        await registerVerification.assertEmptyLastName();
        await registerVerification.assertEmptyAddress();
        await registerVerification.assertEmptyCity();
        await registerVerification.assertEmptyState();
        await registerVerification.assertEmptyZipCode();
        await registerVerification.assertEmptySocialSecurityNumber();
        await registerVerification.assertEmptyUsername();
        await registerVerification.assertEmptyPassword();
        await registerVerification.assertEmptyPasswordConfirmation();
    });

    registrationTest('Registration - happy way', async ({ registerPage, page, t }) => {
        await registerPage.fillFirstName();
        await registerPage.fillLastName();
        await registerPage.fillAddress();
        await registerPage.fillCity();
        await registerPage.fillState();
        await registerPage.fillZipCode();
        await registerPage.fillPhoneNumber();
        await registerPage.fillSocialSecurityNumber();
        await registerPage.fillUsername();
        await registerPage.fillPassword();
        await registerPage.fillPasswordConfirmation();
        await registerPage.clickRegisterButton();
        const dashboardVerification = new DashboardVerification(page, t);
        await dashboardVerification.assertAccountSuccessfullyCreated();
    });

});