import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Card } from 'store/actions/cards/types';
import { Payment } from 'store/actions/payments/types';

export interface RootState {
  cards: Card[];
  payments: Payment[];
};

export interface InitialState extends RootState, PersistPartial {};