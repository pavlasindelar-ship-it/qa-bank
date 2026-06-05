import { LoginRequest } from "../api/authentication";
import { APIRequestContext } from "playwright-core";

export class AuthenticationClient {

    constructor(readonly request: APIRequestContext) {
    }

    async login(loginData: LoginRequest) {
        return await this.request.get("/parabank/services/bank/login/" + loginData.username + "/" + loginData.password, {
            headers: {
                "Accept": "application/json"
            }
        });
    }

}
