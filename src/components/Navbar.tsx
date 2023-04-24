import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Pokemon } from "../../Pokemon.type";
import { MuiDrawer } from "./MuiDrawer";

type NavbarProps = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};
export const Navbar = ({ pokemons, setPokemons }: NavbarProps) => {
  return (
    <>
      <AppBar position="static" color="primary" elevation={0}>
        <MuiDrawer pokemons={pokemons} setPokemons={setPokemons} />
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              align="center"
              color="inherit"
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              <Stack direction="row" spacing={5}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </Stack>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
