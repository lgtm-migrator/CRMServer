import { PaymentTypes } from './PaymentTypes';
import { prop } from '@typegoose/typegoose';

export class Payment {
    @prop({ required: true })
    type: PaymentTypes;

    @prop({ type: String, required: true })
    date: string;

    @prop({ type: Number, required: true })
    amount: number;

    @prop({ type: String, required: true })
    issuer: string;

    @prop({ type: String, required: false, default: '' })
    subscription?: string;
}