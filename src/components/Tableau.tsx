import { Button, TextField } from "@mui/material";
import { useState } from "react";

type tabType = {
  nextId: number;
  add: string;
};
//Pourquoi l'incremente lorsque le nombre est à exterieur de la fonction !!!
let nombre = 0;
export const Tableau = () => {
  const [value, setValue] = useState<string>("Pierre");
  const [artist, setArtist] = useState<tabType[]>([]);
  console.log("artist", artist);
  const addValue = () => {
    return setArtist([...artist, { nextId: nombre++, add: value }]);
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button variant="outlined" onClick={addValue}>
        Push
      </Button>
      <ul>
        {artist.map((a) => {
          return <li key={a.nextId}>{a.nextId}</li>;
        })}
      </ul>
    </>
  );
};
