import { apiTest } from "../../core/fixtures/api-fixtures";
import { expect } from "@playwright/test";
import { CreateNewBankAccountRequest, CreateNewBankAccountResponse, CustomerAccountsResponse, CustomersResponse, UpdateCustomerInformationRequest } from "../../model/api/customers";
import { ApiResponse } from "../../model/clients/base.client";
import { faker } from "@faker-js/faker";

apiTest.describe("Customer API tests", () => {

    apiTest("Get customer details", async ({ customersClient }) => {
        const response: ApiResponse<CustomersResponse> = await customersClient.getCustomerDetails(
            parseInt(process.env.CUSTOMER_ID!)
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

    apiTest("Get customer accounts", async ({ customersClient }) => {
        const response: ApiResponse<CustomerAccountsResponse[]> = await customersClient.getCustomerAccounts(
            parseInt(process.env.CUSTOMER_ID!));
        expect(response.status).toBe(200);
        for (let i = 0; i < response.body.length; i++) {
            expect(response.body[i].id).not.toBeNull();
            expect(response.body[i].customerId).toBe(parseInt(process.env.CUSTOMER_ID!));
            expect(response.body[i].type).not.toBeNull();
            expect(response.body[i].balance).not.toBeNull();
        }
    });

    apiTest("Create a new bank account", async ({ customersClient }) => {
        const response: ApiResponse<CreateNewBankAccountResponse> = await customersClient.createNewBankAccount(
            new CreateNewBankAccountRequest(parseInt(process.env.CUSTOMER_ID!), 0, 15342)
        );
        expect(response.status).toBe(200);
        expect(response.body.id).not.toBeNull();
        expect(response.body.customerId).toBe(parseInt(process.env.CUSTOMER_ID!));
        expect(response.body.type).toBe("CHECKING");
        expect(response.body.balance).toBe(0);
    });

    apiTest("Update customer information", async ({ customersClient }) => {
        const response: ApiResponse<string> = await customersClient.updateCustomerInformation(
            parseInt(process.env.CUSTOMER_ID!),
            new UpdateCustomerInformationRequest(
                parseInt(process.env.CUSTOMER_ID!),
                faker.person.firstName(),
                faker.person.lastName(),
                faker.location.streetAddress(),
                faker.location.city(),
                faker.location.state(),
                faker.location.zipCode(),
                faker.phone.number(),
                faker.finance.accountNumber(),
                process.env.USER_NAME!,
                process.env.PASS_WORD!
            )
        );
        expect(response.status).toBe(200);
        expect(response.body).toBe("Successfully updated customer profile");
    });

});

