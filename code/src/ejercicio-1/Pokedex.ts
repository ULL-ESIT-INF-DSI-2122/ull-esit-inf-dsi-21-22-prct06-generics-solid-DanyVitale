/**
 * Importar las clases DB, Pokemon, Marvel
 */
import {DragonBall} from "./DragonBall";
import {Pokemon} from "./Pokemon";
import {Marvel} from "./Marvel";

/**
 * Class Pokedex - Contiene la informacion de todos los pokemon
 * Att. : protected pokemonPokedex: Pokemon|DB|Marvel[];
 *
 * ```typescript
 * const bulbasaur: Pokemon = new Pokemon("Bulbasaur", 6.9, 70, "hierba", 49, 49, 45);
 *
 * pokedex.getPokemonPokedex() returns [bulbasaur, charmander]
 * ```
*/
export class Pokedex {
  constructor(private pokemonPokedex: (Pokemon|DragonBall|Marvel)[]) {
    this.pokemonPokedex = pokemonPokedex;
  }
  /**
  * Función getPokemonPokedex()
  * @returns Pokedex
  */
  getPokemonPokedex() {
    return this.pokemonPokedex;
  }
}