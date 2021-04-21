import { Card, ADD_CARD, EDIT_CARD, DELETE_CARD } from "store/actions/cards/types";

export const addCard = (card: Card) => {
  return {
    type: ADD_CARD,
    payload: card
  };
};

export const editCard = (card: Card) => {
  return {
    type: EDIT_CARD,
    payload: card
  };
};

export const deleteCard = (id: string) => {
  return {
    type: DELETE_CARD,
    payload: id
  };
};