import { apiTest } from "../../core/fixtures/api-fixtures";
import { LoginRequest, LoginResponsePayload } from "../../model/api/authentication";
import { expect } from "@playwright/test";

apiTest.describe("Login API tests", () => {

    apiTest("login successfully with valid credentials", async ({ authenticationClient }) => {
        const response = await authenticationClient.login(new LoginRequest(process.env.USER_NAME!, process.env.PASS_WORD!));
        expect(response.status()).toBe(200);

        const responseBody: LoginResponsePayload = await response.json();

        expect(responseBody.id).toBe(parseInt(process.env.CUSTOMER_ID!));
        expect(responseBody.firstName).not.toBeNull();
        expect(responseBody.lastName).not.toBeNull();
        expect(responseBody.ssn).not.toBeNull();
        expect(responseBody.address).not.toBeNull();
        expect(responseBody.address.street).not.toBeNull();
        expect(responseBody.address.city).not.toBeNull();
        expect(responseBody.address.state).not.toBeNull();
        expect(responseBody.address.zipCode).not.toBeNull();
        expect(responseBody.phoneNumber).not.toBeNull();
    });

});
