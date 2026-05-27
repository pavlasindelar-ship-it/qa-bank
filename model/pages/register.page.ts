import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";
import { getRandomUser } from "../../core/utils/test-data";

const user = getRandomUser();

export class RegisterPage {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { }

    async clickRegisterButton() {
        await this.page.getByRole('button', { name: this.t("registration.button") }).click();
    }

    async fillFirstName() {
        await this.page.locator('#customer\\.firstName').fill(user.firstName);
    }

    async fillLastName() {
        await this.page.locator('#customer\\.lastName').fill(user.lastName);
    }

    async fillAddress() {
        await this.page.locator('#customer\\.address\\.street').fill(user.address);
    }

    async fillCity() {
        await this.page.locator('#customer\\.address\\.city').fill(user.city);
    }

    async fillState() {
        await this.page.locator('#customer\\.address\\.state').fill(user.state);
    }

    async fillZipCode() {
        await this.page.locator('#customer\\.address\\.zipCode').fill(user.zipCode);
    }

    async fillPhoneNumber() {
        await this.page.locator('#customer\\.phoneNumber').fill(user.phoneNumber);
    }

    async fillSocialSecurityNumber() {
        await this.page.locator('#customer\\.ssn').fill(user.ssn);
    }

    async fillUsername() {
        await this.page.locator('#customer\\.username').fill(user.username);
    }

    async fillPassword() {
        await this.page.locator('#customer\\.password').fill(user.password);
    }

    async fillPasswordConfirmation() {
        await this.page.locator('#repeatedPassword').fill(user.password);
    }

}