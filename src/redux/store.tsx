import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
// import { cryptoCurrencyApi } from "../features/api/crypto-currency/cryptoCurrencyApi";
import { apiSlice } from "../lib/rtkQueryApi";

const store = configureStore({
    reducer:{
        auth: authReducer,

        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        apiSlice.middleware
    ),
});

export default store;