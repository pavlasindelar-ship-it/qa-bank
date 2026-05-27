import { expect, Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export class RegisterVerification {

    constructor(
        private readonly page: Page,
        private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) { }

    async assertSigningUpTitle() {
        await expect(this.page.getByText(this.t("registration.heading"))).toBeVisible();
    }

    async assertEmptyFirstName() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyFirstName"))).toBeVisible();
    }

    async assertEmptyLastName() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyLastName"))).toBeVisible();
    }

    async assertEmptyAddress() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyAddress"))).toBeVisible();
    }

    async assertEmptyCity() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyCity"))).toBeVisible();
    }

    async assertEmptyState() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyState"))).toBeVisible();
    }

    async assertEmptyZipCode() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyZipCode"))).toBeVisible();
    }

    async assertEmptySocialSecurityNumber() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptySocialSecurityNumber"))).toBeVisible();
    }

    async assertEmptyUsername() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyUserName"))).toBeVisible();
    }

    async assertEmptyPassword() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyPassword"))).toBeVisible();
    }

    async assertEmptyPasswordConfirmation() {
        await expect(this.page.getByText(this.t("registration.errorMessage.emptyPasswordConfirmation"))).toBeVisible();
    }

}