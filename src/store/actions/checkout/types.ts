export const MAKE_PAYMENT = 'MAKE_PAYMENT';

export interface Payment {

};

export interface CheckoutActionTypes {
  type: typeof MAKE_PAYMENT;
  payload: Payment;
};