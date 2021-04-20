import { CheckoutActionTypes, MAKE_PAYMENT, Payment } from "store/actions/checkout/types";

const initialState: Payment[] = [];

const checkoutReducer = (checkouts = initialState, action: CheckoutActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case MAKE_PAYMENT:
      return [...checkouts, payload];
    default: 
      return checkouts;
  }
};

export default checkoutReducer;