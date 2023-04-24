import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Pokemon } from "../Pokemon.type";
import { Navbar } from "./components/Navbar";
import { MuiDrawerContextProvider } from "./context/MuiDrawerContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { PokemonDetail } from "./pages/PokemonDetail";

function App() {
  //Objectif maitriser les props et les stats avec les events tout ça en typescript
  // Faire des carts de voiture et verra apres

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  return (
    <MuiDrawerContextProvider>
      <Navbar pokemons={pokemons} setPokemons={setPokemons} />
      <Routes>
        <Route
          path="/"
          element={<Home pokemons={pokemons} setPokemons={setPokemons} />}
        />
        <Route path="/about/" element={<About />} />
        <Route path="/PokemonDetail/:id" element={<PokemonDetail />} />
      </Routes>
    </MuiDrawerContextProvider>
  );
}

export default App;
