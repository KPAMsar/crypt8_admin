import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { URL } from "./params";
import { token } from "./params";


const baseQuery = fetchBaseQuery({
  baseUrl:URL,
  prepareHeaders: (headers) => {
    // const token = getState()?.auth?.userInfo?.accessToken;
    
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  timeout: 60000,
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  // tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
