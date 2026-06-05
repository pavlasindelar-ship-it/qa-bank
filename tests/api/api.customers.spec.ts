import { apiTest } from "../../core/fixtures/api-fixtures";
import { expect } from "@playwright/test";
import { CustomerAccountsResponse, CustomersResponse } from "../../model/api/customers";

apiTest.describe("Customer API tests", () => {

    apiTest("Get customer details", async ({ customersClient }) => {
        const response = await customersClient.getCustomerDetails(parseInt(process.env.CUSTOMER_ID!));
        expect(response.status()).toBe(200);

        const responseBody: CustomersResponse = await response.json();
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

    apiTest("Get customer accounts", async ({ customersClient }) => {
        const response = await customersClient.getCustomerAccounts(parseInt(process.env.CUSTOMER_ID!));
        expect(response.status()).toBe(200);

        const responseBody: CustomerAccountsResponse[] = await response.json();
        for (let i = 0; i < responseBody.length; i++) {
            expect(responseBody[i].id).not.toBeNull();
            expect(responseBody[i].customerId).toBe(parseInt(process.env.CUSTOMER_ID!));
            expect(responseBody[i].type).not.toBeNull();
            expect(responseBody[i].balance).not.toBeNull();
        }
    });
});