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

export interface PokemonDetail {
  pokemon: {
    abilities?: any;
    base_experience?: number;
    form?: any;
    game_indices?: any;
    height?: number;
    held_items?: any;
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    message?: string;
    moves?: any;
    name?: string;
    order?: number;
    species?: any;
    sprites?: any;
    types?: any;
    weigth?: number;
  };
}
