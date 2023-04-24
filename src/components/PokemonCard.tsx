import { Button, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../Pokemon.type";
import { MuiDrawerContexts } from "../context/MuiDrawerContext";

export type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  type: string;
  pokemons?: Pokemon[];
  setPokemons?: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

type cartItemsType = {
  id: number;
  name: string;
  qty: any;
};

export const PokemonCard = ({
  id,
  name,
  image,
  type,
  pokemons,
  setPokemons,
}: PokemonCardProps) => {
  const [cartItems, setCartItems] = useState<cartItemsType[]>([]);
  let navigate = useNavigate();
  const MyComponent = styled("div")({
    color: "darkslategray",
    backgroundColor: "aliceblue",
    padding: 8,
    borderRadius: 4,
  });

  const handleClick = (id: number) => {
    navigate(`/PokemonDetail/${id}`);
  };
  // ici je dois avoir le state qui contient mes données

  // const onAdd = (product: cartItemsType) => {
  //   const exist = cartItems.find((a) => a.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((a) =>
  //         a.id === product.id ? { ...exist, qty: exist.qty + 1 } : a
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  const { getItemQuantity, addCartQuantity } = useContext(MuiDrawerContexts);
  const quantity = getItemQuantity(id);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card key={id}>
          <CardContent>
            <CardMedia
              component="img"
              style={{ width: 130, height: 130 }}
              image={image}
            />
            <Typography>
              <MyComponent>{type}</MyComponent>
            </Typography>
            <Typography>
              {name} {id}
            </Typography>
            <Button variant="contained" onClick={() => handleClick(id)}>
              Detail-Pokemon
            </Button>
            <Button onClick={() => console.log(addCartQuantity(id))}>
              add
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
