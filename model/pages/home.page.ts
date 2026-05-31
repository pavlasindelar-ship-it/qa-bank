import { Page } from "@playwright/test";
import { TranslationKeys } from "../../types/translations";

export type HomePageSelectors = {
    registerLinkSelector: string;
    titleSelector: string;
    imageLogoNameSelector: string;
    subTitleSelector: string;
    userNameInputSelector: string;
    passwordInputSelector: string;
    loginButtonSelector: string;
}

export class HomePage {
    public readonly selectors: HomePageSelectors;

    constructor(
    private readonly page: Page,
    private readonly t: (key: TranslationKeys, options?: Record<string, any>) => string) {
        this.selectors = {
            registerLinkSelector: this.t("homePage.registerLink"),
            titleSelector: this.t("homePage.title"),
            imageLogoNameSelector: this.t("homePage.imageLogoName"),
            subTitleSelector: this.t("homePage.subtitle"),
            userNameInputSelector: "input[name='username']",
            passwordInputSelector: "input[name='password']",
            loginButtonSelector: this.t("homePage.loginButton")
        };
     }

    async goto() {
        await this.page.goto("/parabank", { waitUntil: "networkidle" });
    }

    async clickRegisterLink() {
        await this.page.getByText(this.selectors.registerLinkSelector).click();
    }

    async fillUserName() {
        await this.page.locator(this.selectors.userNameInputSelector).fill(process.env.USER_NAME!);
    }

    async fillPassword() {
        await this.page.locator(this.selectors.passwordInputSelector).fill(process.env.PASS_WORD!);
    }

    async clickLoginButton() {
        await this.page.getByRole("button", { name: this.selectors.loginButtonSelector }).click();
    }
}
