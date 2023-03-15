import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import propertiesSlice from "./propertiesSlice";
import uiSlice from "./uiSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducers = combineReducers({
  authSlice: authSlice.reducer,
  propertiesSlice: propertiesSlice.reducer,
  uiSlice: uiSlice.reducer,
});
const mainreducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: mainreducer,
});

export const persistor = persistStore(store);
