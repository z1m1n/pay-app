import { ADD_CARD, Card, CardActionTypes, DELETE_CARD, EDIT_CARD } from "store/actions/cards/types";

const initialState: Card[] = [];

const cardsReducer = (cards = initialState, action: CardActionTypes): Card[] => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CARD:
      return [...cards, payload as Card];
    case EDIT_CARD:
      const payloadCard: Card = payload as Card;

      return cards.map((card: Card) => card.id === payloadCard.id ? { ...card, ...payloadCard } : card);
    case DELETE_CARD:
      const payloadId: string = payload as unknown as string;
      
      return cards.filter((card: Card) => card.id !== payloadId);
    default:
      return cards;
  };
};

export default cardsReducer;