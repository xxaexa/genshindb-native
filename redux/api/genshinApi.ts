import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGenshinResponse } from "../../types";

export const genshinApi = createApi({
  reducerPath: "genshinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gidb-backend.vercel.app/api/genshin",
  }),
  tagTypes: ["Genshin"],
  endpoints: (builder) => ({
    getArtifacts: builder.query<IGenshinResponse[], void>({
      query() {
        return {
          url: `/artifact`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Genshin" as const,
                _id,
              })),
              { type: "Genshin", _id: "LIST_ARTIFACT" },
            ]
          : [{ type: "Genshin", _id: "LIST_ARTIFACT" }],
      transformResponse: (results: { artifact: IGenshinResponse[] }) =>
        results.artifact,
    }),
    searchArtifacts: builder.query<IGenshinResponse[], string | undefined>({
      query(search) {
        return {
          url: `/artifact?name=${search}`,
        };
      },
      providesTags: ["Genshin"],
      transformResponse: (results: { artifact: IGenshinResponse[] }) =>
        results.artifact,
    }),
    getCharacters: builder.query<IGenshinResponse[], void>({
      query() {
        return {
          url: `/character`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Genshin" as const,
                _id,
              })),
              { type: "Genshin", _id: "LIST_CHARACTER" },
            ]
          : [{ type: "Genshin", _id: "LIST_CHARACTER" }],
      transformResponse: (results: { character: IGenshinResponse[] }) =>
        results.character,
    }),
    searchCharacters: builder.query<IGenshinResponse[], string | undefined>({
      query(search) {
        return {
          url: `/character?name=${search}`,
        };
      },
      providesTags: ["Genshin"],
      transformResponse: (results: { character: IGenshinResponse[] }) =>
        results.character,
    }),
    getWeapons: builder.query<IGenshinResponse[], void>({
      query() {
        return {
          url: `/weapon`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Genshin" as const,
                _id,
              })),
              { type: "Genshin", _id: "LIST_WEAPONS" },
            ]
          : [{ type: "Genshin", _id: "LIST_WEAPONS" }],
      transformResponse: (results: { weapon: IGenshinResponse[] }) =>
        results.weapon,
    }),
    searchWeapons: builder.query<IGenshinResponse[], string | undefined>({
      query(search) {
        return {
          url: `/weapon?name=${search}`,
        };
      },
      providesTags: ["Genshin"],
      transformResponse: (results: { weapon: IGenshinResponse[] }) =>
        results.weapon,
    }),
  }),
});

export const {
  useGetArtifactsQuery,
  useGetCharactersQuery,
  useGetWeaponsQuery,
  useSearchArtifactsQuery,
  useSearchCharactersQuery,
  useSearchWeaponsQuery,
} = genshinApi;
