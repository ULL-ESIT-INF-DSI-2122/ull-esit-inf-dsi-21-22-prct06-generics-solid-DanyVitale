/**
 * Importar las interfaces SearchableCollection y Streamable
 */
import {SearchableCollection, Streamable} from "./Streamable";

export abstract class BasicStreamableCollection<T extends {name: string, year: number, category: string}> implements Streamable<T>, SearchableCollection<T> {
  constructor(protected catalogo: T[]) {
    this.catalogo = catalogo;
  }
  /**
   * Obtener el catalogo
   * @returns {T}
   */
  getCatalogo() {
    return this.catalogo;
  }

  /**
   * Obtener la longitud de catalogo
   * @returns longitud Catalogo
   */
  getNumberOfStreams(): number {
    return this.catalogo.length;
  }

  /**
   * Obtener una Stream en concreto
   * @param index
   * @returns Stream en esa posición
   */
  getStream(index: number): T {
    return this.catalogo[index];
  }

  /**
   * Añadir un stream al catalogo
   * @param stream
   */
  addStream(stream: T): void {
    this.catalogo.push(stream);
  }
  /**
   * Eliminar un stream del catalogo
   * @param name
   */
  deleteStream(name: string): void {
    this.catalogo.forEach((stream, index) => {
      if (stream.name == name) {
        this.catalogo.splice(index, 1);
      }
    });
  }

  /**
   * Obtener el catalogo que contiene solo el nombre filtrado
   * @param name
   * @returns catalogo con el nombre filtrado
   */
  searchByName(name: string): T[] {
    return this.catalogo.filter((stream) => stream.name.includes(name));
  }

  /**
   * Obtener el catalogo fitrado por año
   * @param year
   * @returns Catalogo filtrado
   */
  searchByYear(year: number): T[] {
    return this.catalogo.filter((stream) => stream.year === (year));
  }

  /**
   * Filtrar segùn la categoría
   * @param cat
   * @returns {T[]}
   */
  searchByCategory(cat: string): T[] {
    return this.catalogo.filter((stream) => stream.category === (cat));
  }

  /**
   * Imprimir la información del elemento
   */
  abstract printInfo(): void;
}

