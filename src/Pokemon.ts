export type Pokemon = {
  id: number;
  price?: number;
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
