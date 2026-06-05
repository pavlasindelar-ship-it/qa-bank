import { APIRequestContext } from "playwright-core";

export class CustomersClient {

    constructor(readonly request: APIRequestContext) {
    }

    async getCustomerDetails(customerId: number) {
        return await this.request.get("/parabank/services/bank/customers/" + customerId, {
            headers: {
                "Accept": "application/json"
            }
        });
    }

    async getCustomerAccounts(customerId: number) {
        return await this.request.get("/parabank/services/bank/customers/" + customerId + "/accounts", {
            headers: {
                "Accept": "application/json"
            }
        });
    }

}