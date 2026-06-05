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



