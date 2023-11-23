import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'c8a42e4734mshd8a3fa3018a4094p1ff31cjsndf003e485402',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        /* getCryptos: builder.query({
            query: () => createRequest('/coins')
        }) */
        getCryptos: builder.query({
            query: () => createRequest('/coins'),
        }),
    })
})

export const { useGetCryptosQuery } = cryptoApi;