export const MAKE_PAYMENT = 'MAKE_PAYMENT';

export interface Payment {
  id: string;
};

export interface CheckoutActionTypes {
  type: typeof MAKE_PAYMENT;
  payload: Payment;
};