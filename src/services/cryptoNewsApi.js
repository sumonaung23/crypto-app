import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'c8a42e4734mshd8a3fa3018a4094p1ff31cjsndf003e485402',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})

/* const createRequest = ({ newsCategory, count }) => {
    const encodedCategory = encodeURIComponent(newsCategory);
    const fullUrl = `/news/search?q=${encodedCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`;
    console.log('Request URL:', baseUrl + fullUrl);
    return { url: fullUrl, headers: cryptoNewsApiHeaders };
}; */



export const cryptoNewsApi = createApi ({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;