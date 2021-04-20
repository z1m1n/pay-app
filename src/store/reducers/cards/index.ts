import { ADD_CARD, Card, CardActionTypes, DELETE_CARD, EDIT_CARD } from "store/actions/cards/types";

const initialState: Card[] = [];

const cardsReducer = (cards = initialState, action: CardActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CARD:
      return [...cards, payload];
    case EDIT_CARD:
      return cards.map((card: Card) => card.id === payload.id ? { ...card, ...payload } : card);
    case DELETE_CARD:
      return cards.filter(({ id }) => id !== payload.id);
    default:
      return cards;
  };
};

export default cardsReducer;