import { AccountsClient } from "../../model/clients/accounts.client";
import { AuthenticationClient } from "../../model/clients/authentication.client";
import { CustomersClient } from "../../model/clients/customers.client";
import { test } from "./qa-fixtures";

export const apiTest = test.extend<{
     authenticationClient: AuthenticationClient;
     customersClient: CustomersClient;
     accountsClient: AccountsClient;
}>({
    authenticationClient: async ({ request }, use) => {
        const api = new AuthenticationClient(request);
        await use(api);
    },

    customersClient: async ({ request }, use) => {
        const api = new CustomersClient(request);
        await use(api);
    },

    accountsClient: async ({ request }, use) => {
        const api = new AccountsClient(request);
        await use(api);
    }

});