export type Pokemon = {
  id: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  name: string;
};
