import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Card } from 'store/actions/cards/types';
import { Payment } from 'store/actions/checkout/types';

export interface RootState {
  cards?: Card[];
  checkout?: Payment[];
};

export interface InitialState extends RootState, PersistPartial {};