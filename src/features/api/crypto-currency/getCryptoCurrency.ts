import { cryptoCurrencyApi } from "./cryptoCurrencyApi";


export const extendedCryptoCurrencyApi = cryptoCurrencyApi.injectEndpoints({
    endpoints: (builder)=>({
        getCryptoCurrency : builder.query({
            query: (page = 1) => ({url: `?page=${page}`}),
            providesTags: (result, query, args) => [
                {type: 'Product', id: 'LIST'},
            ]
        })
    })
    
});

export const {useGetCryptoCurrencyQuery} = extendedCryptoCurrencyApi;