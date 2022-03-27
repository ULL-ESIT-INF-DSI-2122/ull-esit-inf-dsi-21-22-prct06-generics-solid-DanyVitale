/**
 * Importar BasicStreamableCollection
 */
import {BasicStreamableCollection} from "./BasicStreamableCollection";

/**
 * Tipos de categorías
 */
 type Category = "Aventuras" | "Comedia" | "Acción" | "Drama";

/**
 * Clase Peli que consta de atributos principales de una pelicula
 */
export class Peli {
  constructor(public name: string, public category: Category, public year: number, public director: string, public mainActor: string) {
  }
}

/**
 * Class that describes a collection of movies
 */
export class PeliStreamable extends BasicStreamableCollection<Peli> {
  constructor(protected catalogo: Peli[]) {
    super(catalogo);
  }
  /**
   * Prints the collection of movies with each attribute
   */
  printInfo() {
    this.catalogo.forEach((peli) => {
      console.log(`Película: ${peli.name};`);
      console.log(`Año: ${peli.year};`);
      console.log(`Categoría: ${peli.category};`);
      console.log(`Director: ${peli.director};`);
      console.log(`Actor Principal: ${peli.mainActor}`);
    });
  }
}