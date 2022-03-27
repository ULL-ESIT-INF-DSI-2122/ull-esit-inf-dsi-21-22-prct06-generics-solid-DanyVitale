/**
 * Interfaz que contiene métodos para manibular el catálogo
 */
export interface Streamable<T>{
  addStream(media: T): void;
  getStream(index: number): T;
  getNumberOfStreams(): number;
  deleteStream(name: string): void;
}

/**
 * Interfaz que permite imprimir la información
 */
export interface PrintableInfo {
  printInfo(): void
}

/**
 * Interfaz que describe una serie de métodos de búsqueda
 */
export interface SearchableCollection<T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
  searchByCategory(cat: string): T[];
}

