import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import propertiesSlice from "./propertiesSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducers = combineReducers({
  propertiesSlice: propertiesSlice.reducer,
});
const mainreducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: mainreducer,
});

export const persistor = persistStore(store);
