import { expect, Page } from "@playwright/test";

export class HomePage {

    constructor(private readonly page: Page) { }

    async goto() {
        await this.page.goto("/");
    }

    async assertTitle() {
        await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking");
    }
      
    async assertImageLogoName() {
        await expect(this.page.locator("img.logo")).toHaveAttribute("alt", "ParaBank");
    }

    async assertSubTitle() {
        await expect(this.page.getByText("Experience the difference")).toBeVisible();
    }

    async clickRegisterLink() {
        await this.page.getByText("Register").click();
    }
}
