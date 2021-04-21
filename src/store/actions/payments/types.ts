import { Card } from "store/actions/cards/types";

export const MAKE_PAYMENT = 'MAKE_PAYMENT';

export interface Payment {
  id: string;
  name: string;
  card?: Card;
  applePay: boolean;
};

export interface PaymentsActionTypes {
  type: typeof MAKE_PAYMENT;
  payload: Payment;
};