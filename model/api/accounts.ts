export class GetAccountByIdRequest {
    accountId: number;
    

    constructor(accountId: number) {
        this.accountId = accountId;
    }
}

export type GetAccountByIdResponse = {
    id: number;
    customerId: number;
    type: string;
    balance: number;
}