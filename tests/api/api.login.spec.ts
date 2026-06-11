import { apiTest } from "../../core/fixtures/api-fixtures";
import { LoginRequest, LoginResponsePayload } from "../../model/api/authentication";
import { expect } from "@playwright/test";
import { ApiResponse } from "../../model/clients/base.client";

apiTest.describe("Login API tests", () => {

    apiTest("login successfully with valid credentials", async ({ authenticationClient }) => {
        const response: ApiResponse<LoginResponsePayload> = await authenticationClient.login(
            new LoginRequest(process.env.USER_NAME!, process.env.PASS_WORD!)
        );
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(parseInt(process.env.CUSTOMER_ID!));
        expect(response.body.firstName).not.toBeNull();
        expect(response.body.lastName).not.toBeNull();
        expect(response.body.ssn).not.toBeNull();
        expect(response.body.address).not.toBeNull();
        expect(response.body.address.street).not.toBeNull();
        expect(response.body.address.city).not.toBeNull();
        expect(response.body.address.state).not.toBeNull();
        expect(response.body.address.zipCode).not.toBeNull();
        expect(response.body.phoneNumber).not.toBeNull();
    });

});
