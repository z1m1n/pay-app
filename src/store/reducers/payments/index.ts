import { PaymentsActionTypes, MAKE_PAYMENT, Payment } from "store/actions/payments/types";

const initialState: Payment[] = [];

const paymentsReducer = (payments = initialState, action: PaymentsActionTypes): Payment[] => {
  const { type, payload } = action;

  switch (type) {
    case MAKE_PAYMENT:
      return [...payments, payload];
    default: 
      return payments;
  }
};

export default paymentsReducer;