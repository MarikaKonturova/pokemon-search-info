import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { abMap, stMap, tyMap } from "../Constans";
import { IPokemon, pokemonDataType } from "../types";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const createRequest = (url: string) => ({ url });

export const pokedexApi = createApi({
  reducerPath: "pokedexApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokedex: builder.query<pokemonDataType[], string>({
      query: (limit = "50") => createRequest(`?limit=${limit}`),
      transformResponse: (res: any) => res.results.map((pokemon: pokemonDataType, index: number) => {
          return {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        })
        
      
    }),
    getPokemon: builder.query<IPokemon, string>({
      query: (pokemonId) => createRequest(`/${pokemonId}`),
      transformResponse: (res: any) => {
        const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`;
        return {
          name: res.name,
          id: res.id,
          abilities: abMap(res.abilities),
          height: res.height,
          weight: res.weight,
          stats: stMap(res.stats),
          types: tyMap(res.types),
          fullImageUrl,
        };
      },
    }),
  }),
});

export const { useGetPokedexQuery, useGetPokemonQuery } = pokedexApi;
