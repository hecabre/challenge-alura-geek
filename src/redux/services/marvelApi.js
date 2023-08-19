import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://gateway.marvel.com/v1/public";

export const marvelApi = createApi({
  reducerPath: "marvelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query({
      query: (name) => ({
        url: `/characters?name=${name}&ts=1000&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`,
        method: "GET",
      }),
      transformResponse: (response) => response.data.results[0],
    }),
    getTopComics: builder.query({
      query: () => ({
        url: `/comics?ts=1000&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`,
        method: "GET",
      }),
    }),
    getSerie: builder.query({
      query: (id) => ({
        url: `/series/${id}?ts=1000&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`,
        method: "GET",
      }),
    }),
    getComicByName: builder.query({
      query: (name) => ({
        url: `/comics?title=${name}&ts=1000&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`,
        method: "GET",
      }),
    }),
    getComicById: builder.query({
      query: (id) => ({
        url: `/comics/${id}?ts=1000&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`,
        method: "GET",
      }),
      transformResponse: (response) => response.data.results[0],
    }),
    getCharacterByID: builder.query({
      query: (id) => ({
        url: `/comics/${id}?ts=1000&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`,
        method: "GET",
      }),
      transformResponse: (response) => response.data.results[0],
    }),
  }),
});

export const {
  useGetCharacterByNameQuery,
  useGetTopComicsQuery,
  useGetComicByIdQuery,
  useGetSerieQuery,
  useGetCharacterByIDQuery,
  useGetComicByNameQuery,
} = marvelApi;
