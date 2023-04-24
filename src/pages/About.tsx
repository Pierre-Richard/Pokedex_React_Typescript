import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CounterOne } from "../components/CounterOne";
import { Tableau } from "../components/Tableau";
import { Text } from "../components/Text";
export type tabType = {
  id: number;
  name: string;
};

export const About = () => {
  const [name, setName] = useState<string>("Eric");
  const [fieldValue, setFieldValue] = useState("");
  const [tab, setTab] = useState<tabType[]>([]);

  const [changeColor, setChangeColor] = useState<string>("error");
  const [isTrue, setTrue] = useState<boolean>(false);

  const [showText, setShowText] = useState<boolean>(false);

  const handleEleves = (e: any) => {
    return newPerson("Jeudi");
  };
  const newPerson = (names: string) => {
    let nPerson = names;
    return setName(nPerson);
  };
  //ici c est le composant et monté
  useEffect(() => {
    //console.log("ComponentDidMount");
  }, []);
  //ici c est quand le composant est modifié
  useEffect(() => {
    //console.log("ComponentDidUpdate");
  });
  //ici c'est quand le composant est desconstruire
  useEffect(() => {
    return () => {
      //console.log("ComponentWillUnMount");
    };
  }, []);
  //Le code s'execute simplement si la valeur(state) est modifié
  //exemple
  useEffect(() => {
    //console.log("Le nom a été modifié!!");
  }, [name]);

  const handleField = (e: any) => {
    return setFieldValue(e.target.value);
  };
  let nextId = 0;
  const handleButton = () => {
    setTab([...tab, { id: nextId++, name: fieldValue }]);
    setFieldValue("");
  };
  console.log(tab);
  const ChangeButtonColor = () => {
    setTrue(!isTrue);
  };
  const ShowText = () => {
    console.log("ShowText", showText);
    return setShowText(!showText);
  };

  return (
    <>
      <Button color="success" variant="contained" onClick={handleEleves}>
        Changer le nom
      </Button>
      <TextField value={name} />
      {/* <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={fieldValue}
        onChange={handleField}
      /> */}
      {/* <Button onClick={handleButton}>TextField Button</Button>
      <ul>
        {tab.map((a) => {
          return <li key={a.id}>{a.name}</li>;
        })}
      </ul>
      <Button
        variant="contained"
        onClick={ChangeButtonColor}
        color={isTrue ? "error" : "success"}
      >
        Change
      </Button> */}
      <Button variant="contained" onClick={ShowText}>
        Show Text
      </Button>
      {showText && <Text />}
      <Tableau />
      <CounterOne />
    </>
  );
};
