import { expect } from "@playwright/test";
import { apiTest } from "../../core/fixtures/api-fixtures";
import { GetAccountByIdResponse } from "../../model/api/accounts";
import { ApiResponse } from "../../model/clients/base.client";

apiTest.describe("Accounts API tests", () => {

    apiTest("Get account by ID", async ({ accountsClient }) => {
        const response: ApiResponse<GetAccountByIdResponse> = await accountsClient.getAccountById(
            parseInt(process.env.ACCOUNT_ID!)
        );
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(parseInt(process.env.ACCOUNT_ID!));
        expect(response.body.customerId).toBe(parseInt(process.env.CUSTOMER_ID!));
        expect(response.body.type).not.toBeNull();
        expect(response.body.balance).not.toBeNull();
    });
});