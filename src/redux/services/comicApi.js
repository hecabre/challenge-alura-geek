import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const comicApi = createApi({
  reducerPath: "comicApi",
  tagTypes: ["Comics"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    validateStatus: (response) => {
      if (response.status === 404) {
        throw new Error("Comic not found");
      }
      return response.ok;
    },
  }),

  endpoints: (builder) => ({
    getComics: builder.query({
      query: () => "/comics",
      providesTags: ["Comics"],
    }),
    getComicDetailsById: builder.query({
      query: (id) => `/comics/${id}`,
      throwOnError: true,
      onError: (error) => {
        if (error.status === 404) {
          return new Error("Comic not found");
        }
        return error;
      },
      invalidatesTags: ["Comics"],
    }),

    editComic: builder.mutation({
      query: (comicData) => ({
        url: `/comics/${comicData.id}`,
        body: comicData,
        method: "PUT",
      }),
      invalidatesTags: ["Comics"],
    }),
    createComic: builder.mutation({
      query: (newComic) => ({
        url: "/comics",
        method: "POST",
        body: newComic,
      }),
      invalidatesTags: ["Comics"],
    }),
    deleteComic: builder.mutation({
      query: (id) => ({
        url: `/comics/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comics"],
    }),
  }),
});

export const {
  useGetComicsQuery,
  useDeleteComicMutation,
  useCreateComicMutation,
  useGetComicDetailsByIdQuery,
  useEditComicMutation,
} = comicApi;
