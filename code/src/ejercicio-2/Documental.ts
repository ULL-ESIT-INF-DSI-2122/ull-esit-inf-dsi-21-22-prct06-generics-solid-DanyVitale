/**
 * Importar BasicStreamableCollection
 */
import {BasicStreamableCollection} from "./BasicStreamableCollection";

type Category = "DocuDrama"|"Histórico"|"Moderno";

/**
* Clase Peli que consta de atributos principales de una pelicula
*/
export class Documental {
  constructor(public name: string, public year: number, public durac: number, public category: Category) {
  }
}
/**
* Clase que contiene el catalolo de los documentales
*/
export class DocumentalStreamable extends BasicStreamableCollection<Documental> {
  constructor(protected catalogo: Documental[]) {
    super(catalogo);
  }
  /**
  * Imprime la información
  */
  printInfo() {
    this.catalogo.forEach((doc) => {
      console.log(`Documental: ${doc.name};`);
      console.log(`Año: ${doc.year};`);
      console.log(`Duración: ${doc.durac} mins;`);
    });
  }
}