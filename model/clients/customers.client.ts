import { APIRequestContext } from "playwright-core";
import {
    CreateNewBankAccountRequest,
    CreateNewBankAccountResponse,
    CustomerAccountsResponse,
    CustomersResponse,
    GetPositionsForCustomerResponse,
    UpdateCustomerInformationRequest
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

    async updateCustomerInformation(customerId: number, data: UpdateCustomerInformationRequest): Promise<ApiResponse<string>> {
        return await this.post<string>("/parabank/services/bank/customers/update/" + customerId, {
            headers: {
                "Accept": "application/json"
            },
            params: {
                customerId: data.customerId,
                firstName: data.firstName,
                lastName: data.lastName,
                street: data.street,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                phoneNumber: data.phoneNumber,
                ssn: data.ssn,
                username: data.username,
                password: data.password
            }
        });
    }

    async getPositionsForCustomer(customerId: number): Promise<ApiResponse<GetPositionsForCustomerResponse[]>> {
        return await this.get<GetPositionsForCustomerResponse[]>("/parabank/services/bank/customers/" + customerId + "/positions", {
            headers: {
                "Accept": "application/json"
            }
        });
    }
}