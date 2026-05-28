import { Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";
import { getRandomUser } from "../../core/utils/test-data";

const user = getRandomUser();

export type RegisterPageSelectors = {
    firstNameInputSelector: string;
    lastNameInputSelector: string;
    addressInputSelector: string;
    cityInputSelector: string;
    stateInputSelector: string;
    zipCodeInputSelector: string;
    phoneNumberInputSelector: string;
    socialSecurityNumberInputSelector: string;
    usernameInputSelector: string;
    passwordInputSelector: string;
    passwordConfirmationInputSelector: string;
    registerButtonSelector: string;
    headingSelector: string;
    emptyFirstNameErrorSelector: string;
    emptyLastNameErrorSelector: string;
    emptyAddressErrorSelector: string;
    emptyCityErrorSelector: string;
    emptyStateErrorSelector: string;
    emptyZipCodeErrorSelector: string;
    emptySocialSecurityNumberErrorSelector: string;
    emptyUsernameErrorSelector: string;
    emptyPasswordErrorSelector: string;
    emptyPasswordConfirmationErrorSelector: string;
}

export class RegisterPage {
    public readonly selectors: RegisterPageSelectors;

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { 
            this.selectors = {
                firstNameInputSelector: '#customer\\.firstName',
                lastNameInputSelector: '#customer\\.lastName',
                addressInputSelector: '#customer\\.address\\.street',
                cityInputSelector: '#customer\\.address\\.city',
                stateInputSelector: '#customer\\.address\\.state',
                zipCodeInputSelector: '#customer\\.address\\.zipCode',
                phoneNumberInputSelector: '#customer\\.phoneNumber',
                socialSecurityNumberInputSelector: '#customer\\.ssn',
                usernameInputSelector: '#customer\\.username',
                passwordInputSelector: '#customer\\.password',
                passwordConfirmationInputSelector: '#repeatedPassword',
                registerButtonSelector: this.t("registration.button"),
                headingSelector: this.t("registration.heading"),
                emptyFirstNameErrorSelector: this.t("registration.errorMessage.emptyFirstName"),
                emptyLastNameErrorSelector: this.t("registration.errorMessage.emptyLastName"),
                emptyAddressErrorSelector: this.t("registration.errorMessage.emptyAddress"),
                emptyCityErrorSelector: this.t("registration.errorMessage.emptyCity"),
                emptyStateErrorSelector: this.t("registration.errorMessage.emptyState"),
                emptyZipCodeErrorSelector: this.t("registration.errorMessage.emptyZipCode"),
                emptySocialSecurityNumberErrorSelector: this.t("registration.errorMessage.emptySocialSecurityNumber"),
                emptyUsernameErrorSelector: this.t("registration.errorMessage.emptyUserName"),
                emptyPasswordErrorSelector: this.t("registration.errorMessage.emptyPassword"),
                emptyPasswordConfirmationErrorSelector: this.t("registration.errorMessage.emptyPasswordConfirmation")
            };
        }

    async clickRegisterButton() {
        await this.page.getByRole('button', { name: this.selectors.registerButtonSelector }).click();
    }

    async fillFirstName() {
        await this.page.locator(this.selectors.firstNameInputSelector).fill(user.firstName);
    }

    async fillLastName() {
        await this.page.locator(this.selectors.lastNameInputSelector).fill(user.lastName);
    }

    async fillAddress() {
        await this.page.locator(this.selectors.addressInputSelector).fill(user.address);
    }

    async fillCity() {
        await this.page.locator(this.selectors.cityInputSelector).fill(user.city);
    }

    async fillState() {
        await this.page.locator(this.selectors.stateInputSelector).fill(user.state);
    }

    async fillZipCode() {
        await this.page.locator(this.selectors.zipCodeInputSelector).fill(user.zipCode);
    }

    async fillPhoneNumber() {
        await this.page.locator(this.selectors.phoneNumberInputSelector).fill(user.phoneNumber);
    }

    async fillSocialSecurityNumber() {
        await this.page.locator(this.selectors.socialSecurityNumberInputSelector).fill(user.ssn);
    }

    async fillUsername() {
        await this.page.locator(this.selectors.usernameInputSelector).fill(user.username);
    }

    async fillPassword() {
        await this.page.locator(this.selectors.passwordInputSelector).fill(user.password);
    }

    async fillPasswordConfirmation() {
        await this.page.locator(this.selectors.passwordConfirmationInputSelector).fill(user.password);
    }

}
