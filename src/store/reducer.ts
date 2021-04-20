import { combineReducers, Reducer } from 'redux';
import { RootState } from 'store/types';
import CardsReducer from 'store/reducers/cards';
import CheckoutReducer from 'store/reducers/checkout';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  cards: CardsReducer,
  checkout: CheckoutReducer
});

export default rootReducer;
