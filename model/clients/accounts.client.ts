import { APIRequestContext } from "playwright-core";
import { ApiResponse, BaseClient } from "./base.client";
import { GetAccountByIdRequest, GetAccountByIdResponse } from "../api/accounts";

export class AccountsClient extends BaseClient {

    constructor(readonly request: APIRequestContext) {
        super(request);
    }

    async getAccountById(accountId: number): Promise<ApiResponse<GetAccountByIdResponse>> {
        return await this.get<GetAccountByIdResponse>("/parabank/services/bank/accounts/" + accountId, {
            headers: {
                "Accept": "application/json"
            }
        });
    }
}