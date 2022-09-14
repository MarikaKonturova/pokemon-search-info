import { toFirstCharUppercase } from "../Constans";
import { Link, useParams } from "react-router-dom";
import arrowLeft from "../assets/icons/arrowLeft.svg";
import Pokeball from "../assets/icons/Pokeball.svg";
import Pokeheight from "../assets/icons/Pokeheight.svg";
import Pokeweight from "../assets/icons/Pokeweight.svg";
import ProgressBar from "./ProgressBar";
import { useGetPokemonQuery } from "../services/pokedexApi";
export const Pokemon = () => {
  const { pokemonId } = useParams();
  const pokemonStats = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];
  const { data: pokemon, isFetching } = useGetPokemonQuery(pokemonId ?? "2");
  console.log(pokemon);

  if (isFetching) {
    return <>Loading ..</>;
  }
  return (
    <>
      {pokemon && (
        <div key={pokemon.id} className={`pokemon ${pokemon.types[0]}`}>
          <img src={Pokeball} alt="" className="pokemon-decor" />
          <div className="pokemon-title">
            <Link to="/">
              {" "}
              <img src={arrowLeft} alt="" />
            </Link>
            <h1>{toFirstCharUppercase(pokemon.name)}</h1>{" "}
            <h2># {`${pokemon.id}`}</h2>
          </div>

          <div className="pokemon-info">
            <img
              style={{ width: "300px", height: "300px" }}
              src={pokemon.fullImageUrl}
              className="pokemon-img"
              alt="pokemon avatar"
            />
            <div className="pokemon-types">
              {pokemon.types.map((type) => {
                return (
                  <h2 key={type} className={`pokemon-type ${type}`}>
                    {type}
                  </h2>
                );
              })}
            </div>
            <h2 className="pokemon-h2">About</h2>
            <div className={`about-groups `}>
              <div className="about-group">
                <div className="about-group-group">
                  <img src={Pokeheight} alt="pokemon weight" />
                  <h2>{pokemon.height} cm</h2>
                </div>
                <p>Height</p>
              </div>
              <div className="vl"></div>
              <div className="about-group">
                <div className="about-group-group">
                  <img src={Pokeweight} alt="pokemon weight" />
                  <h2>{pokemon.weight} kg</h2>
                </div>
                <p>Weight</p>
              </div>
              <div className="vl"></div>
              <div className="about-group">
                <div>
                  {pokemon.abilities.map((ability) => {
                    return <h2 key={ability}>{ability}</h2>;
                  })}
                </div>
                <p>Types</p>
              </div>
            </div>
            <h4 className="pokemon-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              asperiores excepturi laudantium autem. Iure voluptate esse
              possimus aut tenetur eum ut!
            </h4>
            <div className="pokemon-stats">
              <h4 className="stats-title pokemon-h2">Base Stats</h4>
              <div className="stats-bars">
                <div className="stats-bar">
                  {pokemonStats.map((name, i) => (
                    <h2 key={i}>{name}</h2>
                  ))}
                </div>

                <div className="stats-bar">
                  {pokemon.stats.map((st, i) => (
                    <p key={i}>
                      {+st < 100 ? "0" : ""}
                      {st}
                    </p>
                  ))}
                </div>
                <div className="stats-bar">
                  {pokemon.stats.map((st, i) => (
                    <ProgressBar
                      key={i}
                      className={`${pokemon.types[0]}`}
                      completed={st}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
