import { expect } from '@playwright/test';
import { registrationTest } from '../core/fixtures/register.fixtures';

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

    registrationTest('Registration - happy way', async ({ registerPage }) => {


        await registerPage.clickRegisterButton();

    });

});