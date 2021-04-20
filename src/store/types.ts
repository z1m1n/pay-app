import { PersistPartial } from 'redux-persist/es/persistReducer';

export type CardsReducer = any;

export type CheckoutReducer = any;

export interface RootState {
  cards: CardsReducer;
  checkout: CheckoutReducer;
};

export interface InitialState extends RootState, PersistPartial {};