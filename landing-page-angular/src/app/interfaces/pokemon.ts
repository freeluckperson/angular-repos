export interface Pokemon {
  name: string;
  url: String;
}

export interface PokemonResults {
  count: number;
  next: string;
  previous?: string;
  results: Pokemon[];
}
