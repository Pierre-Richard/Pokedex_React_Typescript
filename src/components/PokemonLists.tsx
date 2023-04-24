import { Pokemon } from "../../Pokemon.type";
import { PokemonCard } from "./PokemonCard";

export type PokemonProps = {
  pookemons: Pokemon[];
  input?: string | undefined;
  type?: string | undefined;
  setType?: any;
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

export const PokemonLists = ({
  pookemons,
  input,
  type,
  setType,
  pokemons,
  setPokemons,
}: PokemonProps) => {
  //une fonction qui filtre mon tableau selon le type du pokemon

  const filteredPokemonsType = pookemons.filter((pokemon) => {
    if (type === "") {
      return pokemon;
    }
    return pokemon.types[0].type.name === type;
  });

  // je crée une fonction qui filtre sur mon tableau de pokemon
  const filteredPokemons = filteredPokemonsType.filter((pookemon) => {
    //Si mon inputText est vide retourne moi mon tableau
    if (input === undefined) {
      return pookemon;
    } else {
      // retourne moi le nom du pokemon(carte) qui a le meme nom qui se trouve dans l'input
      return pookemon.name.toLowerCase().includes(input);
    }
  });
  return (
    <>
      {filteredPokemons.map((pookemon) => {
        return (
          <PokemonCard
            key={pookemon.id}
            name={pookemon.name}
            image={pookemon.sprites.front_default}
            type={pookemon.types[0].type.name}
            id={pookemon.id}
            pokemons={pokemons}
            setPokemons={setPokemons}
          />
        );
      })}
    </>
  );
};
