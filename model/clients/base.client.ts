import { APIRequestContext, APIResponse } from 'playwright-core';

export type ApiResponse<T> = {
    status: number;
    body: T;
};

export class BaseClient {

    constructor(protected request: APIRequestContext) {}

    private logRequest(method: string, url: string, options?: any) {
        console.log(`[API REQUEST] ${method.toUpperCase()} ${url}`);
        if (options && Object.keys(options).length > 0) {
            try {
                console.log('[API REQUEST] options:', JSON.stringify(options, null, 2));
            } catch (e) {
                console.log('[API REQUEST] options: <unserializable>');
            }
        }
    }

    private logResponse<T>(response: APIResponse, body: T) {
        try {
            console.log(`[API RESPONSE] ${response.status()} ${response.url()}`);
            console.log('[API RESPONSE] headers:', JSON.stringify(response.headers(), null, 2));
            try {
                console.log('[API RESPONSE] body:', JSON.stringify(body, null, 2));
            } catch (e) {
                console.log('[API RESPONSE] body: <unserializable>');
            }
        } catch (e) {
            console.log('[API RESPONSE] <failed to log response>');
        }
    }

    private async parseResponseBody(response: APIResponse) {
        try {
            return await response.json();
        } catch (e) {
            return response.text();
        }
    }

    protected async get<T = any>(path: string, options?: any): Promise<ApiResponse<T>> {
        this.logRequest('get', path, options);
        const res = await this.request.get(path, options);
        const body = await this.parseResponseBody(res);
        this.logResponse(res, body);
        return { status: res.status(), body } as ApiResponse<T>;
    }

    protected async post<T = any>(path: string, options?: any): Promise<ApiResponse<T>> {
        this.logRequest('post', path, options);
        const res = await this.request.post(path, options);
        const body = await this.parseResponseBody(res);
        this.logResponse(res, body);
        return { status: res.status(), body } as ApiResponse<T>;
    }

}
