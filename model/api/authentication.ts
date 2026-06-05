export class LoginRequest {

    constructor(public readonly username: string, public readonly password: string) {
        this.username = username;
        this.password = password;
    }

}

export interface LoginResponsePayload {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    ssn: string;
    address: AddressLoginResponsePayload;
}

export interface AddressLoginResponsePayload {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}
