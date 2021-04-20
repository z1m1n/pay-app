export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export interface Card {

};

interface AddCardAction {
  type: typeof ADD_CARD;
  payload: Card;
};

interface EditCardAction {
  type: typeof EDIT_CARD,
  payload: Card;
}

interface DeleteCardAction {
  type: typeof DELETE_CARD,
  payload: string;
}

export type CardActionTypes = AddCardAction | EditCardAction | DeleteCardAction;