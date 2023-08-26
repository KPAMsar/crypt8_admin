import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { URL } from '../../../lib/params';

export const cryptoCurrencyApi = createApi({
    reducerPath: "crypto-currency-api",
    baseQuery:fetchBaseQuery({baseUrl: `${URL}`}),
    tagTypes: ["CryptoCurrency"],
    endpoints:(builder) =>({}),
});