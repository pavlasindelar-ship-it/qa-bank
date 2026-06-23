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
    fromAccountId: number;

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

export class UpdateCustomerInformationRequest {
    customerId: number;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    ssn: string;
    username: string;
    password: string;

    constructor(customerId: number, firstName: string, lastName: string, street: string, city: string, state: string, zipCode: string, phoneNumber: string, ssn: string, username: string, password: string) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.ssn = ssn;
        this.username = username;
        this.password = password;
    }
}

    export type GetPositionsForCustomerResponse = {
        positionId: number;
        customerId: number;
        name: string;
        symbol: string;
        shares: number;
        purchasePrice: number;
    }







