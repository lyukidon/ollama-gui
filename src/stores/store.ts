import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import settingReducer from "./settingSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  chat: chatReducer,
  setting: settingReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteist: ["setting"],
  blacklist: ["chat"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
