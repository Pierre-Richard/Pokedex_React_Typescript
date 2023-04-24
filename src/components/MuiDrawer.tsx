import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Pokemon } from "../../Pokemon.type";
import { MuiDrawerContexts } from "../context/MuiDrawerContext";
import { CartItem } from "./CartItem";
import { PokemonCard } from "./PokemonCard";

type MuiDrawerProps = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

type cartItemsType = {
  id: number;
  name: string;
};
export const MuiDrawer = ({ pokemons, setPokemons }: MuiDrawerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { cartItemss, cartQuantity } = useContext(MuiDrawerContexts);

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCartIcon />
        {cartQuantity}
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box padding={2} width="250px" textAlign={"center"} role="presentation">
          <Typography variant="h6" component="div">
            {cartItemss.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                pokemons={pokemons}
                setPokemons={setPokemons}
              />
            ))}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
