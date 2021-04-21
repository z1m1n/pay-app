import { MAKE_PAYMENT, Payment } from "store/actions/payments/types";

export const makePayment = (payment: Payment) => {
  return {
    type: MAKE_PAYMENT,
    payload: payment
  };
};