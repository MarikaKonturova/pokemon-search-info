import React, { ChangeEvent, useState } from "react";
import { toFirstCharUppercase } from "../Constans";
import { pokemonDataType, TGeneratePokemonCard } from "../types";
import { Link } from "react-router-dom";
import Pokeball from "../assets/icons/Pokeball.svg";
import Sort from "../assets/icons/Sort.svg";
import search from "../assets/icons/search.svg";
import { useGetPokedexQuery } from "../services/pokedexApi";

export const Pokedex = () => {
  const [sort, setSort] = useState<"ZtoA" | "AtoZ" | "">("");
  const [filter, setFilter] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value.toLowerCase());
  };
  const { data: pokemonData, isFetching } = useGetPokedexQuery("100");
  let sortedPokemons = pokemonData!;

  if (sort) {
    sortedPokemons = [...sortedPokemons].sort((a, b) => {
      if (sort === "AtoZ") {
        return a.name[0] > b.name[0] ? 1 : b.name[0] > a.name[0] ? -1 : 0;
      } else {
        return a.name[0] < b.name[0] ? 1 : b.name[0] < a.name[0] ? -1 : 0;
      }
    });
  }

  const GetPokemonCard = ({ pokemon }: TGeneratePokemonCard) => {
    const { id, name, sprite } = pokemon;
    return (
      <>
        <Link to={`/${id}`}>
          <div className="pokedex-card">
            <h4 className="pokedex-card-id">{`#${id}`}</h4>
            <img src={sprite} alt="pokedex card" className="pokedex-card-img" />
            <div className="pokedex-card-info">
              <h2>{`${toFirstCharUppercase(name)}`}</h2>
            </div>
          </div>
        </Link>
      </>
    );
  };

  if(isFetching)return <>Loading.....</>

  return (
    <>
      <div className="navbar">
        <div className="navbar-group">
          <div className="navbar-logo">
            <img src={Pokeball} alt="pokedex logo icon" className="logo-icon" />
            <h1 className="logo-text">Pokédex</h1>
          </div>
          <div className="navbar-filter">
            <button
              className="navbar-filter"
              onClick={() => {
                setSort(
                  sort === "" ? "AtoZ" : sort === "AtoZ" ? "ZtoA" : "AtoZ"
                );
              }}
            >
              <img src={Sort} alt="filter sort" />
            </button>
          </div>
        </div>

        <div className={"navbar-search"}>
          <img src={search} alt="search icon" className="search-icon" />
          <input
            placeholder="search"
            onChange={handleSearchChange}
            value={filter}
          />
        </div>
      </div>
      {pokemonData ? (
        <div className="pokedex">
          <div className="wrapper">
            {sortedPokemons.map((pokemon: pokemonDataType) => {
              return (
                pokemon.name.includes(filter) && (
                  <GetPokemonCard pokemon={pokemon} key={pokemon.id} />
                )
              );
            })}
          </div>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};
