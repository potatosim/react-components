import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CharacterItem from 'types/CharacterItem';

interface GetResponse {
  info: ResponseInfo;
  results: CharacterItem[];
}

interface ResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<GetResponse, string>({
      query: (name) => {
        return {
          url: 'character/',
          params: { name: name },
        };
      },
    }),
    getCharacter: builder.query<CharacterItem, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const {
  useGetCharactersByNameQuery,
  useLazyGetCharactersByNameQuery,
  useGetCharacterQuery,
} = charactersApi;
