import { expect } from '@playwright/test';
import { registrationTest } from '../core/fixtures/register.fixtures';
import { DashboardPage } from '../model/pages/dashboard.page';

registrationTest.describe('Registration page', () => {

    registrationTest('Verification of empty fields', async ({ registerPage }) => {

        await registerPage.clickRegisterButton();
        await registerPage.assertEmptyFirstName();
        await registerPage.assertEmptyLastName();
        await registerPage.assertEmptyAddress();
        await registerPage.assertEmptyCity();
        await registerPage.assertEmptyState();
        await registerPage.assertEmptyZipCode();
        await registerPage.assertEmptySocialSecurityNumber();
        await registerPage.assertEmptyUsername();
        await registerPage.assertEmptyPassword();
        await registerPage.assertEmptyPasswordConfirmation();
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
        const dashboardPage = new DashboardPage(page, t);
        await dashboardPage.assertAccountSuccessfullyCreated();
    });

});