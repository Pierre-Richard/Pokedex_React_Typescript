import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Pokemon } from "../../Pokemon.type";

export const PokemonDetail = () => {
  // useParams qui provient de react me permet de recuperer les données utilisateur passer dans url via id
  const { id } = useParams();
  // je crée un state qui me permettra de stocker les données provenant de mon api.
  // ici je veux typer un pokemon et non une liste de pokemon[].
  //je donne à mon state type qui se Pokemon qui typera les données de pokemon
  const [detail, setDetail] = useState<Pokemon>();
  let navigate = useNavigate();
  useEffect(() => {
    const getPokemon = async () => {
      // const res contient
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      //console.log(res.data)
      //je set ma donnée dans le setDetail pour le recuperer dans le state detail
      setDetail(res.data);
    };

    getPokemon();
  }, [id]);

  const buttonBackHome = () => {
    return navigate("/");
  };
  return (
    <>
      <Container>
        <Grid item sm={2}>
          <Card>
            <CardContent>
              <CardMedia
                component="img"
                style={{ width: "130px", height: "130px" }}
                image={detail?.sprites.front_default}
              />
              <Typography>{detail?.id}</Typography>
              <Typography>{detail?.name}</Typography>
              <Typography>
                Type:{detail?.types.map((a) => a.type.name)}
              </Typography>
            </CardContent>
            <Button variant="contained" onClick={buttonBackHome}>
              Back
            </Button>
          </Card>
        </Grid>
      </Container>
    </>
  );
};
