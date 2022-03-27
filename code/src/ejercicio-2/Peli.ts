/**
 * Importar BasicStreamableCollection
 */
import {BasicStreamableCollection} from "./BasicStreamableCollection";

/**
* Tipos de categorías
*/
 type Category = "Comedia" | "Acción" | "Drama";

/**
 * Clase Peli que consta de atributos principales de una pelicula
 */
export class Peli {
  constructor(public name: string, public category: Category, public year: number, public director: string, public mainActor: string) {
  }
}

/**
* Clase que contiene el catalolo de las pelis
*/
export class PeliStreamable extends BasicStreamableCollection<Peli> {
  constructor(protected catalogo: Peli[]) {
    super(catalogo);
  }
  /**
  * Imprime la información de cada película
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