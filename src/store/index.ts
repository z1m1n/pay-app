import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";

const persistConfig = {
  key: `pay-app`,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = (initalState?: {}) => {
  return createStore(persistedReducer, initalState);
};

export const store = configureStore();
export const persistor = persistStore(store);
