import { combineReducers, Reducer } from 'redux';
import { RootState } from 'store/types';
import cardsReducer from 'store/reducers/cards';
import paymentsReducer from 'store/reducers/payments';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  cards: cardsReducer,
  payments: paymentsReducer
});

export default rootReducer;
