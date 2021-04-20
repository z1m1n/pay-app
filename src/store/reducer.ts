import { combineReducers, Reducer } from 'redux';
import { RootState } from 'store/types';
import cardsReducer from 'store/reducers/cards';
import checkoutReducer from 'store/reducers/checkout';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  cards: cardsReducer,
  checkout: checkoutReducer
});

export default rootReducer;
