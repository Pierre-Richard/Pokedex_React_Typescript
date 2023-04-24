import { Pokemon } from "../../Pokemon.type";
import { Pokedex } from "../components/Pokedex";

type homeProps = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};
export const Home = ({ pokemons, setPokemons }: homeProps) => {
  return (
    <>
      <Pokedex pokemons={pokemons} setPokemons={setPokemons} />
    </>
  );
};
