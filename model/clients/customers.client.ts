import { APIRequestContext } from "playwright-core";
import {
    CreateNewBankAccountRequest,
    CreateNewBankAccountResponse,
    CustomerAccountsResponse,
    CustomersResponse
} from "../api/customers";
import { ApiResponse, BaseClient } from "./base.client";

export class CustomersClient extends BaseClient {

    constructor(readonly request: APIRequestContext) {
        super(request);
    }

    async getCustomerDetails(customerId: number): Promise<ApiResponse<CustomersResponse>> {
        return await this.get<CustomersResponse>("/parabank/services/bank/customers/" + customerId, {
            headers: {
                "Accept": "application/json"
            }
        });
    }

    async getCustomerAccounts(customerId: number): Promise<ApiResponse<CustomerAccountsResponse[]>> {
        return await this.get<CustomerAccountsResponse[]>("/parabank/services/bank/customers/" + customerId + "/accounts", {
            headers: {
                "Accept": "application/json"
            }
        });
    }

    async createNewBankAccount(data: CreateNewBankAccountRequest): Promise<ApiResponse<CreateNewBankAccountResponse>> {
        return await this.post<CreateNewBankAccountResponse>("/parabank/services/bank/createAccount", {
            headers: {
                "Accept": "application/json"
            },
            params: {
                customerId: data.customerId,
                newAccountType: data.newAccountType,
                fromAccountId: data.fromAccountId
            }
        });
    }
}