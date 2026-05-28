import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";
import { RegisterPageSelectors } from "../pages/register.page";

export class RegisterVerification {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string,
        public readonly selectors: RegisterPageSelectors) { }

    async assertSigningUpTitle() {
        await expect(this.page.getByText(this.selectors.headingSelector)).toBeVisible();
    }

    async assertEmptyFirstName() {
        await expect(this.page.getByText(this.selectors.emptyFirstNameErrorSelector)).toBeVisible();
    }

    async assertEmptyLastName() {
        await expect(this.page.getByText(this.selectors.emptyLastNameErrorSelector)).toBeVisible();
    }

    async assertEmptyAddress() {
        await expect(this.page.getByText(this.selectors.emptyAddressErrorSelector)).toBeVisible();
    }

    async assertEmptyCity() {
        await expect(this.page.getByText(this.selectors.emptyCityErrorSelector)).toBeVisible();
    }

    async assertEmptyState() {
        await expect(this.page.getByText(this.selectors.emptyStateErrorSelector)).toBeVisible();
    }

    async assertEmptyZipCode() {
        await expect(this.page.getByText(this.selectors.emptyZipCodeErrorSelector)).toBeVisible();
    }

    async assertEmptySocialSecurityNumber() {
        await expect(this.page.getByText(this.selectors.emptySocialSecurityNumberErrorSelector)).toBeVisible();
    }

    async assertEmptyUsername() {
        await expect(this.page.getByText(this.selectors.emptyUsernameErrorSelector)).toBeVisible();
    }

    async assertEmptyPassword() {
        await expect(this.page.getByText(this.selectors.emptyPasswordErrorSelector)).toBeVisible();
    }

    async assertEmptyPasswordConfirmation() {
        await expect(this.page.getByText(this.selectors.emptyPasswordConfirmationErrorSelector)).toBeVisible();
    }

}
