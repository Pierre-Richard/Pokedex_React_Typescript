import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { Pokemon } from "../../Pokemon.type";
import { MuiDrawerContexts } from "../context/MuiDrawerContext";
type CartItemProps = {
  id: number;
  quantity: number;
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};
export const CartItem = ({
  id,
  quantity,
  pokemons,
  setPokemons,
}: CartItemProps) => {
  const item = pokemons.find((i) => i.id === id);
  const { deleteCartItem } = useContext(MuiDrawerContexts);
  return (
    <>
      <Grid item md={4}>
        <Card key={id}>
          <CardContent>
            <CardMedia
              component="img"
              style={{ width: 130, height: 130 }}
              image={item?.sprites.front_default}
            />
            <Typography>
              {<div>name: {item?.name}</div>}{" "}
              {quantity > 1 && <span>Qty: {quantity}x</span>}
            </Typography>
            <Typography>{item?.types[0].type.name}</Typography>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon
                onClick={() => deleteCartItem(id)}
                fontSize="inherit"
                color="error"
              />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
