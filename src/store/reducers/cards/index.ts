import { ADD_CARD, Card, CardActionTypes, DELETE_CARD, EDIT_CARD } from "store/actions/cards/types";

const initialState: Card[] = [];

const cardsReducer = (cards = initialState, action: CardActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CARD:
      return payload;
    case EDIT_CARD:
      return payload;
    case DELETE_CARD:
      return [];
    default:
      return cards;
  };
};

export default cardsReducer;