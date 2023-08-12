export type PokemonDetail1 = {
  types: Array<{type: {name: string}}>;
  weight: number;
  stats: Array<{base_stat: number; effort: number; stat: {name: string}}>;
  height: number;
  abilities: Array<{ability: {name: string}}>;
};

export type PokemonDetail2 = {
  genera: Array<{genus: string; language: {name: string}}>;
  names: Array<{name: string; language: {name: string}}>;
  flavor_text_entries: Array<{flavor_text: string; language: {name: string}}>;
};

export interface PokemonDetail extends PokemonDetail1, PokemonDetail2 {
  //
}
