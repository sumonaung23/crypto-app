import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/* const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'c8a42e4734mshd8a3fa3018a4094p1ff31cjsndf003e485402',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'; */

const cryptoNewsApiHeaders ={
    'X-RapidAPI-Key': 'c8a42e4734mshd8a3fa3018a4094p1ff31cjsndf003e485402',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi ({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory}) => createRequest(`/v1/${newsCategory}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;