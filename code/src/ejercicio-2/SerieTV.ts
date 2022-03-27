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
export class SerieTV {
  constructor(public name: string, public category: Category, public year: number, public temporadas: number) {
  }
}

/**
* Clase que contiene el catalolo de las SerieTV
*/
export class SerieTVStreamable extends BasicStreamableCollection<SerieTV> {
  constructor(protected catalogo: SerieTV[]) {
    super(catalogo);
  }
  /**
  * Imprime la información
  */
  printInfo() {
    this.catalogo.forEach((serie) => {
      console.log(`SerieTV: ${serie.name};`);
      console.log(`Año: ${serie.year};`);
      console.log(`Categoría: ${serie.category};`);
      console.log(`Temporadas: ${serie.temporadas};`);
    });
  }
}