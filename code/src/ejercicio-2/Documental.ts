/**
 * Importar BasicStreamableCollection
 */
import {BasicStreamableCollection} from "./BasicStreamableCollection";

/**
* Clase Peli que consta de atributos principales de una pelicula
*/
export class Documental {
  constructor(public name: string, public year: number, public durac: number) {
  }
}
/**
* Class that describes a collection of movies
*/
export class DocumentalStreamable extends BasicStreamableCollection<Documental> {
  constructor(protected catalogo: Documental[]) {
    super(catalogo);
  }
  /**
  * Prints the collection of movies with each attribute
  */
  printInfo() {
    this.catalogo.forEach((doc) => {
      console.log(`Documental: ${doc.name};`);
      console.log(`Año: ${doc.year};`);
      console.log(`Duración: ${doc.durac} mins;`);
    });
  }
}