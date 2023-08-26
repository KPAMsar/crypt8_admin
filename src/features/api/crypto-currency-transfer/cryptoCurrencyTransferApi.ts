import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { URL } from '../../../lib/params';


export const CryptoCurrencyTransfer = createApi({
    reducerPath: "Crypto-Currency-Tranfer",
    baseQuery : fetchBaseQuery({baseUrl: `${URL}`}),
    tagTypes: ['Crypto-Currency-Transfer'],
    endpoints: (builder) =>({}),
});