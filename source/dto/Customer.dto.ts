import { IsEmail, Length } from "class-validator";

export class CreateCustomerInputs {

    @IsEmail()
    email: string;

    @Length(7, 12)
    phone: string;

    @Length(7, 12)
    password: string;

}

export class EditCustomerInputs {

    @Length(3, 16)
    firstName: string;

    @Length(3, 16)
    lastName: string;

    @Length(6, 30)
    address: string;

}

export interface CustomerPayload {
    _id: string;
    email: string;
    verified: string;
}

export class CustomersLogin {
    @IsEmail()
    email: string;

    @Length(7, 12)
    password: string;
}


export class CartItem {
    _id: string;
    unit: number;
}


export class OrderInputs {
    txnId: string;
    amount: string;
    items: [CartItem];
}