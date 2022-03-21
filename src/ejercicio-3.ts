/**
 * Interfaz de Collectable<T> generica, desarrolla cuatro métodos:
 * - addItem(newItem: T): void; - añadir elementos
 * - getItem(index: number): T; - Obtener elemento
 * - removeItem(item: number): void; - Remover elemento
 * - getNumberOfItems(): number; - Obtener numero de elementos
 */
export interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(index: number): T;
  removeItem(item: number): void;
  getNumberOfItems(): number;
}

/**
 * Interfaz de Printable generica, desarrolla un método de impresión:
 * - print(): void;
 */
export interface Printable {
    print(): void;
}

/**
 * Clase abstracta PrintableCollection<T extends Collectable<T>, Printable>
 */
export abstract class PrintableCollection<T extends Collectable<T>, Printable> {
  constructor(protected items: T[]) {
    this.items = items;
  }

  /**
   * addItem() - añade un elemento
   * @param newItem
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * getItem() - permite obtener el valor que se le pasa por parámetro
   * @param index
   * @returns el valor
   */
  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * removeItem() - Remover un elemento de la lista
   * @param index
   */
  removeItem(index: number): void {
    delete this.items[index];
  }

  /**
   * getNumberOfItems() - Permite obtener el numero de elementos.
   * @returns Valor que representa la longitud del array es decir el número
   * de elementos
   */
  getNumberOfItems() {
    return this.items.length;
  }

  /**
   * print() - abstracto y hace que se imprima la información
   */
  abstract print() :void;
}

/**
 * Clase NumericPrintableCollection que implementa las interfaces
 *                          PrintableCollection<Collectable<number>, Printable>
 * > Subclase de PrintableCollection<T>
 */
export class NumericPrintableCollection<number> extends PrintableCollection<Collection<number>, Printable> {
  constructor(protected items: number[]) {
    super(items);
  }

  /**
   * print() - Permite imprimir la informacion de items[]
   * @returns Array de string separado por coma
   */
  print() {
    return String(this.items);
  }
}

/**
 * Clase StringPrintableCollection que se extiende
 *          PrintableCollection<Collectable<string>, Printable>
 *  > Subclase de PrintableCollection<T>
 */
export class StringPrintableCollection<string> extends PrintableCollection<Collectable<string>, Printable> {
  constructor(protected items: Collectable<string>[]) {
    super(items);
  }
  /**
   * Imprime el valor en una unica cadena
   * @returns {void}
   */
  print(): string {
    let s: string = '';

    for (let i = 0; i < this.items.length; i++) {
      s += this.items[i];
    }
    return s.replace(/''/g, ',');
  }
}