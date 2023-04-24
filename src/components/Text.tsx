import React, { useEffect, useState } from "react";

export const Text = () => {
  const [text, setText] = useState<string>("TEST");
  //Dans ce useEffect le console s'affiche seulement si le composant apparait(monté)
  //Il rappelera ce composant à chaque fois qu 'il est modifié
  //   useEffect(() => {
  //     console.log("composant monté!");
  //   });
  //Dans ce useEffect le composant sera monté UNE SEUL fois
  //   useEffect(() => {
  //     console.log("composant monté une fois!");
  //   }, []);

  //mettre à jour une valeur
  //   useEffect(() => {
  //     console.log("Updating composant");
  //   }, [text]);

  //Dans ce useEffect le composant disparaitra(detruire)

  useEffect(() => {
    console.log("composant monté");
    return () => {
      console.log("composantdetruire");
    };
  });

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
};
