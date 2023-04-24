import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../../Pokemon.type";
import { PokemonLists } from "./PokemonLists";

export type Pokemons = {
  name: string;
  url: string;
};

type pokedexProps = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

export const Pokedex = ({ pokemons, setPokemons }: pokedexProps) => {
  // 1 je definis un state pour recuperer les valeurs provenant de l'appel de ma requete

  const [input, setInputText] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=30"
      );
      //console.log("dataaa!!!!!!!!!!!!!!!", res.data);
      //3 utilise la methode forEach pour iterer sur mon tableau affiche les noms de mes pokemons
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    //2 utilise async await lors de ma requete api (attendre le resultat)
    getPokemon();
  }, []);

  const handleInputText = (e: any) => {
    //je convertis la valeur de mon input en miniscule
    let lowerCase = e.target.value.toLowerCase();
    //j'assinge  la valeur de mon input à mon state
    setInputText(lowerCase);
  };

  const handleSelect = (event: SelectChangeEvent) => {
    let valueSelect = event.target.value;
    setType(valueSelect);
  };

  return (
    <>
      <Box>
        <TextField
          label="Find your Pokemon"
          variant="standard"
          onChange={handleInputText}
          value={input}
        />
        <div>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={type}
              onChange={handleSelect}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={"poison"}>poison</MenuItem>
              <MenuItem value={"fire"}>fire</MenuItem>
              <MenuItem value={"grass"}>grass</MenuItem>
              <MenuItem value={"bug"}>bug</MenuItem>
              <MenuItem value={"water"}>water</MenuItem>
              <MenuItem value={"fairy"}>fairy</MenuItem>
              <MenuItem value={"normal"}>normal</MenuItem>
              <MenuItem value={"fighting"}>fighting</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      <Box>
        <Grid
          container
          spacing={4}
          // sx={{
          //   paddingTop: "20px",
          //   paddingLeft: "50px",
          //   paddingRight: "5Opx",
          // }}
        >
          {pokemons.length < 0 ? (
            <CircularProgress />
          ) : (
            <PokemonLists
              pookemons={pokemons}
              input={input}
              type={type}
              setType={setType}
              pokemons={pokemons}
              setPokemons={setPokemons}
            />
          )}
        </Grid>
      </Box>
    </>
  );
};
