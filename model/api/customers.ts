export type CustomersResponse = {
    id: number;
    firstName: string;
    lastName: string;
    address: CustomersAddressResponse;
    phoneNumber: string;
    ssn: string;
}

export type CustomersAddressResponse = {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

export type CustomerAccountsResponse = {
    id: number;
    customerId: number;
    type: string;
    balance: number;
}

export class CreateNewBankAccountRequest {
    customerId: number;
    newAccountType: number;
    fromAccountId : number;

    constructor(customerId: number, newAccountType: number, fromAccountId: number) {
        this.customerId = customerId;
        this.newAccountType = newAccountType;
        this.fromAccountId = fromAccountId;
    }
}

export type CreateNewBankAccountResponse = {
    id: number;
    customerId: number;
    type: string;
    balance: number;
}



