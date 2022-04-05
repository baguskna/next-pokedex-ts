export interface Pokemon {
  artwork: string;
  dreamworld: string;
  id: number;
  image: string;
  name: string;
  url: string;
}

export interface HomeProps {
  pokemons: Pokemon[];
}
