import { LoginRequest, LoginResponsePayload } from "../api/authentication";
import { APIRequestContext } from "playwright-core";
import { ApiResponse, BaseClient } from "./base.client";

export class AuthenticationClient extends BaseClient {

    constructor(readonly request: APIRequestContext) {
        super(request);
    }

    async login(loginData: LoginRequest): Promise<ApiResponse<LoginResponsePayload>> {
        return await this.get<LoginResponsePayload>(
            "/parabank/services/bank/login/" + loginData.username + "/" + loginData.password,
            {
                headers: {
                    "Accept": "application/json"
                }
            }
        );
    }

}
