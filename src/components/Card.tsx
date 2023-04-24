import { Button, CardContent, styled, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

export type PokemonProps = {
  id: string | undefined;
  image: string;
  type: string;
  name: string;
};

export const PokemonCard = ({ id, image, type, name }: PokemonProps) => {
  //let navigate = useNavigate();

  const MyComponent = styled("div")({
    color: "darkslategray",
    backgroundColor: "aliceblue",
    padding: 8,
    borderRadius: 4,
  });

  // const handleClick = (sdeds: number) => {
  //   navigate(`/home/${sdeds}`);
  //   console.log("ok");
  // };
  return (
    <>
      <Grid item xs={12} sm={2}>
        <Card key={id}>
          <CardContent>
            <CardMedia
              component="img"
              image={image}
              sx={{ backgroundColor: "red" }}
            />
            <Typography>
              <MyComponent>type: {type}</MyComponent>
            </Typography>
            <Typography>{name}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
