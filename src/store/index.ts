import {createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "store/reducer";
import { InitialState } from "store/types";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: `pay-app`,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = (initalState?: InitialState) => {
  const composeEnhancers = composeWithDevTools({});

  return createStore(persistedReducer, initalState, composeEnhancers());
};

export const store = configureStore();
export const persistor = persistStore(store);
