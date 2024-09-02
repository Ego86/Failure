import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./api/loginApi";

const rootReducer = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
});
const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

export default store;
