/**
 * Interfaz Collectable genérica que contiene una serie de métodos
 */
 interface Collectable<T> {
    addItem(item: T): void;
    getItem(index: number): T;
    removeItem(index: number): void;
    getNumberOfItems(): number;
}

/**
 * Interfaz Printable que permite imprimir la información
 */
interface Searchable<T> {
    search(item: T): T[];
}

/**
 * Clase abstracta que permite implementar los metodos definidos en las interfaces
 */
export abstract class SearchableCollection<T extends Collectable<T>, Searchable<T>> {
    constructor(protected items: T[]) {
    }
    /**
     * Obtener items
     * @returns {T[]}
     */
    getItems(): T[] {
        return this.items;
    }

    /**
     * Añadir objetos
     * @param item 
     */
    addItem(item: T): void {
        this.items.push(item);
    }

    /**
     * Obtener item en el index correspondiente
     * @param index 
     * @returns 
     */
    getItem(index: number): T {
        return this.items[index];
    }

    /**
     * Remover un item del array
     * @param index 
     */
    removeItem(index: number): void {
        this.items.splice(index, 1);
    }
    /**
     * Obtener el numero de objetos
     */
    getNumberOfItems(): number {
        return this.items.length;
    }

    abstract search(item: T): T[];
}

/**
 * Class NumericSearchableCollection that specifies a Collection of numeric
 * values. It extends the abstract class SearchableCollection and implements
 * the method search().
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
    constructor(items: number[]) {
        super(items);
    }

    search(item: number): number[] {
        return this.items.filter((item) => item === item);
    }
}

/**
 * Class StringSearchableCollection that specifies a Collection of strings.
 * It extends the abstract class SearchableCollection and implements
 * the method search().
 */
export class StringSearchableCollection extends SearchableCollection<string> {
    constructor(items: string[]) {
        super(items);
    }

    search(subString: string): string[] {
        return this.items.filter((item) => item.includes(subString));
    }
}