import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { URL } from '../../../lib/params';

export const depositeApi = createApi({
    reducerPath:"deposite",
    baseQuery:  fetchBaseQuery({baseUrl:`${URL}`}),
    tagTypes:['Deposits'],
    endpoints:(builder)=>({}),
});