# **PRÁCTICA 6** -  Clases e interfaces genéricas. Principios SOLID
### *ASIGNATURA:* Desarrollo de Sistemas Informáticos
 > **NOMBRE COMPLETO:** DANIELE VITALE  
 > ID ALU: ALU0101329017  
 > E-MAIL: alu0101329017@ull.edu.es  
 > CURSO: 3ro Ingeniería Informática   

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-DanyVitale/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-DanyVitale?branch=master)

## **ÍNDICE**   
1. [INTRODUCCIÓN](#id1)
2. [EJERCICIOS](#id2)  
    1. [EJERCICIO 1](#id3)  
    2. [EJERCICIO 2](#id4)
    3. [EJERCICIO 3](#id5)
3. [CONCLUSIÓN](#id6)

## **INTRODUCCIÓN**<a name="id1"></a>
La práctica consta de tres ejercicios de programación que resolver y que permitirán conocer más en profundidad los objetos, clases e interfaces genéricas
del lenguaje TypeScript, que son los protagonistas de este tema. En el informe se comentarán las soluciones implementadas para resolver los susodichos
ejercicios.  

Antes de empezar hay que hacer una serie de tareas previas que comprenden lo siguiente:
- [x] Aceptar la [asignación de GitHub Classroom](https://classroom.github.com/a/8XJ_zRAs) asociada a esta práctica.
- [x] En esta práctica, solo se podrá comunicar con el profesorado para cualquier tipo de incidencia relacionada con la misma a través de los issues de 
GitHub del repositorio asignado.
- [x] Es obligatorio el uso las herramientas para obtener un informe sobre el cubrimiento del código que hemos desarrollado, gracias 
a la ejecución de la batería de pruebas diseñada([Instanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/)). Además de las páginas
propuestas, el profesor propone un video presente en el aula virtual de la asignatura y que ilustra la configuración y uso de estas herramientas.

## **EJERCICIOS**<a name="id2"></a>
Vamos a trabajar con clases y, probablemente, cada ejercicio implique el desarrollo de diferentes clases. El código fuente de cada ejercicio estará
alojado en un directorio independiente con la ruta src/ejercicio-n/. Dentro del directorio correspondiente a cada ejercicio, estarán presentes las 
clases desarrolladas en un fichero independiente.

Además de eso, se incluye la documentación mediante el uso de TypeDoc y se adopta una metodología de desarrollo dirigido por pruebas/comportamiento.  

### **EJERCICIO 1**<a name="id3"></a>
Para la realizacion del primer ejercicio, se tomó como referencia de desarrollo el Ejercicio 1 de la [Práctica 5](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/), y lo que se hizo fue incluir distintos tipos de contendientes a la pelea tal y como se propone en el 
guión. En este caso se incluyeron personajes del universo Marvel, Dragon Ball y Pokemon. 
Lo primero fue desarrollar una clase abstracta llamada ```Fighter``` (Superclase) que permita hacer que un contendiente pueda luchar. Además, se creó 
una clase que herede de la superclase para cada universo mencionado.

```typescript
/**
 * Clase abstracta Fighter - permite hacer que un contendiente pueda luchar
 */
export abstract class Fighter {
  constructor(protected nombre: string, protected altura: number, protected peso: number, protected att: number, protected def: number, protected hp: number,
    protected catchingPhrase: string, protected tipo: string) {
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.att = att;
    this.def = def;
    this.hp = hp;
    this.catchingPhrase = catchingPhrase;
  }

  /**
   * getNombre() - Obtener el nombre del luchador
   * @returns Nombre del luchador
   */
  getNombre() {
    return this.nombre;
  }
  /**
   * getAltura() - Obtener la altura del luchador
   * @returns altura del luchador
   */
  getAltura() {
    return this.altura;
  }
  /**
   * getPeso() - Obtener el Peso del luchador
   * @returns Peso del luchador
   */
  getPeso() {
    return this.peso;
  }
  /**
   * getAtt() - Obtener el Ataque del luchador
   * @returns Ataque del luchador
   */
  getAtt() {
    return this.att;
  }
  /**
   * getDef() - Obtener la Defensa del luchador
   * @returns Defensa del luchador
   */
  getDef() {
    return this.def;
  }
  /**
   * getHp() - Obtener el HP del luchador
   * @returns HP del luchador
   */
  getHp() {
    return this.hp;
  }
  /**
   * getCatchingPhrase() - Obtener el CP del luchador
   * @returns Catching Phrase del luchador
   */
  getCatchingPhrase(): string {
    return this.catchingPhrase;
  }
  /**
  * getTipo() - Obtener el tipo de pokemon
  * @returns Tipo de pokemon
  */
  getTipo() {
    return this.tipo;
  }

  abstract printInfo(): void
}
```
La superclase consta de siete atributos y, para cada uno de ellos, se ha desarrollado una función ```get```. Como se puede observar, la función 
```printInfo()``` sigue siendo abstracta ya que la impresión puede variar para cada luchador.

```typescript
/**
* Importa la clase Fighter
*/
import {Fighter} from "./Fighter";
/**
* Class DragonBall - Contiene la informacion que debe
* tener asignada cada uno de los luchadores pertenecientes al mundo de DB:
* Atr. : hereda de la superclase ```Fighter``` y añade ```tipo: string``` y ``` catchingPhrase: string```
*
*/
export class DragonBall extends Fighter {
  constructor(protected nombre: string, protected altura: number, protected peso: number, protected att: number, protected def: number, protected hp: number, protected catchingPhrase: string, protected tipo: string, private tier: string) {
    super(nombre, altura, peso, att, def, hp, catchingPhrase, tipo);
    this.tier = tier;
  }
  /**
   * Obtener el tier relativo al Fighter
   * @returns {string} Tier del luchador del mundo de DB
   */
  getTier() {
    return this.tier;
  }

  /**
  * Funcion para imprimir la información completa del Pokemon
  */
  printInfo() {
    console.log(`-------------------------------`);
    console.log(`Nombre Pokemon: ${this.getNombre()}`);
    console.log(`Tipo: ${this.getTipo()}`);
    console.log(`Tier: ${this.getTier()}`);
    console.log(`Peso y altura: ${this.getPeso()} kg y ${this.getAltura()} cm`);
    console.log(`Ataque y defensa: ${this.getAtt()} Att. y ${this.getDef()} Def.`);
    console.log(`HP: ${this.getHp()}`);
    console.log(`-------------------------------`);
  }
}
```
La clase DragonBall lo que hace es heredar todos los atributos de la superclase y, además incluye un nuevo atributo: tier, que representa el rango del
luchador y puede ir de D (el peor) a Z(el mejor). El método de impresión se adapta a los atributos a disposición de la clase.

**Clase Marvel**

```typescript
/**
* Importa la clase Fighter
*/
import {Fighter} from "./Fighter";

/**
* Class Marvel - Contiene la informacion que debe
* tener asignada cada uno de los luchadores pertenecientes al mundo de Marvel:
* Atr. : hereda de la superclase ```Fighter``` y añade ```estilo: string```
*
*/
export class Marvel extends Fighter {
  constructor(protected nombre: string, protected altura: number, protected peso: number, protected att: number, protected def: number, protected hp: number, protected catchingPhrase: string, protected tipo: string) {
    super(nombre, altura, peso, att, def, hp, catchingPhrase, tipo);
  }
  /**
  * Funcion para imprimir la información completa del Pokemon
  */
  printInfo() {
    console.log(`-------------------------------`);
    console.log(`Nombre Pokemon: ${this.getNombre()}`);
    console.log(`Tipo: ${this.getTipo()}`);
    console.log(`Peso y altura: ${this.getPeso()} kg y ${this.getAltura()} cm`);
    console.log(`Ataque y defensa: ${this.getAtt()} Att. y ${this.getDef()} Def.`);
    console.log(`HP: ${this.getHp()}`);
    console.log(`-------------------------------`);
  }
}
```
**Clase Pokemon**
```typescript
/**
 * Importa la clase Fighter
 */
import {Fighter} from "./Fighter";
/**
 * Class Pokemon - Contiene la informacion que debe
 * tener asignada cada uno de los pokemon:
 * Atr. : hereda de la superclase ```Fighter``` y añade ```tipo: string``` y ``` catchingPhrase: string```
 *
 */
export class Pokemon extends Fighter {
  constructor(protected nombre: string, protected altura: number, protected peso: number, protected att: number, protected def: number, protected hp: number, protected catchingPhrase: string, protected tipo: string) {
    super(nombre, altura, peso, att, def, hp, catchingPhrase, tipo);
  }

  /**
  * Funcion para imprimir la información completa del Pokemon
  */
  printInfo() {
    console.log(`-------------------------------`);
    console.log(`Nombre Pokemon: ${this.getNombre()}`);
    console.log(`Tipo: ${this.getTipo()}`);
    console.log(`Peso y altura: ${this.getPeso()} kg y ${this.getAltura()} cm`);
    console.log(`Ataque y defensa: ${this.getAtt()} Att. y ${this.getDef()} Def.`);
    console.log(`HP: ${this.getHp()}`);
    console.log(`-------------------------------`);
  }
}
```
Las clases Marvel y Pokemon lo que hacen es heredar todos los atributos de la superclase e implementar el método de la impresión de los datos según los 
atributos.
Por último se desarrolló una clase ```Pokedex``` que almacena todos los luchadores y tiene acceso a toda su información. Obviamente siendo tres los 
universos, solo podrá almacenar los luchadores originarios de ellos.

```typescript
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
```
Como podemos observar la clase solo consta de un elemento que, como mencionado anteriormente, es el pokedex y contiene todos los luchadores.
Por último, cabe destacar que desarrollé este ejercicio empleando los principios SOLID Single Responsability y Open-Closed.

### **EJERCICIO 2**<a name="id4"></a>
Pasando al ejercicio 2 el enunciado pide diseñar el modelo de datos de una plataforma de vídeo en streaming. 
A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:
Lo primero que se hizo fue implementar una interfaz genérica ```Streamable``` que trate de especificar propiedades y métodos con los que debería contar 
una colección de emisiones concreta. A continuación se le ilustra la propuesta de la interfaz:
```typescript
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
```
Lo que contiene la interfaz principal es una serie de métodos "estándares" donde se pueden añadir, eliminar o obtener elementos u obtener uno en 
concreto.
A continuación, creé otras dos interfaces "Streamable": una para impimir la información y la otra para búsquedas que comprenden la del nombre y la del 
año de estreno. Esto porque es fundamental en este ejercicio seguir el principio SOLID *Interface segregation.*

El siguiente paso fue crear una clase abstracta genérica BasicStreamableCollection que implemente la interfaz genérica recién mencionada.

```typescript
/**
 * Importar las interfaces SearchableCollection y Streamable
 */
import {SearchableCollection, Streamable} from "./Streamable";

export abstract class BasicStreamableCollection<T extends {name: string, year: number}> implements Streamable<T>, SearchableCollection<T> {
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
```
Como se puede apreciar en el cuadro de código, se extendió la clase genérica implementando las interfaces mencionadas (SearchableCollection y 
StreamableCollection) y se implementaron los varios métodos contenidos en ellas (addStream, searchByYear, etc...). Sin embargo, sigue el método 
```printInfo()``` sin desarrollar (en modo abstracto) ya que su implementación puede variar aún entre clases. El único atributo que implementa es el 
catálogo(y tiene su método ```get```).

Se implementaron las tres clases: Peli, SerieTV y Documental. Es importante decir que sus estructuras son muy similares.

```typescript
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
 * Clase que contiene el catalogo de las pelis
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
```
Empezando con la estructura de la clase ```Peli```, como se puede apreciar en el cuadro, se crea con cinco elementos y servirá para darle la forma a la 
otra clase creada: ```PeliStreamable```. Ésta última se extiende con la clase ```BasicStreamableCollection``` pasándole como parámetro la clase 
anteriormente creada. Contiene un elemento que es el catálogo y es un array de tipo Peli. Finalmente dentro de ella solo se implementó el método 
PrintInfo, que resalta sus atributos.
```typescript
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
*
*/
export class SerieTVStreamable extends BasicStreamableCollection<SerieTV> {
  constructor(protected catalogo: SerieTV[]) {
    super(catalogo);
  }
  /**
  * Imprimir los atributos de una serie
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
```
Seguimos con la estructura de la clase ```SerieTV```, como se puede apreciar, consta de cuatro elementos y servirá para darle la forma a 
la otra clase creada: ```SerieTVStreamable```. Ésta última se extiende con la clase ```BasicStreamableCollection``` pasándole como parámetro la clase 
anteriormente creada. Contiene un elemento que es el catálogo y es un array de tipo SerieTV. Finalmente dentro de ella solo se implementó el método 
PrintInfo, que resalta sus atributos.

```typescript
/**
 * Importar BasicStreamableCollection
 */
import {BasicStreamableCollection} from "./BasicStreamableCollection";

type Category = "DocuDrama"|"Histórico"|"Moderno";

/**
* Clase Documental que consta de atributos principales de una pelicula
*/
export class Documental {
  constructor(public name: string, public year: number, public durac: number, public category: Category) {
  }
}
/**
* Clase que contiene el catalogo de los documentales
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
```
Seguimos con la estructura de la clase ```Documental```, que consta de dos elementos y servirá para la creación de la clase: ```DocumentalStreamable```. 
Ésta última se extiende con la clase ```BasicStreamableCollection``` pasándole como parámetro la clase anteriormente creada. Contiene un elemento que es 
el catálogo y es un array de tipo Documental. Implementa el método PrintInfo, igual que la precedentes dos clases.

### **EJERCICIO 3**<a name="id5"></a>
Para la implementación del tercero y último ejercicio, se propone desarrollar el [Cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar), donde 
cada letra de un alfabeto se desplaza cierto número de posiciones. 
Fue necesario crear únicamente una clase que recibiera como parámetros: texto, clave, alfabeto y desplazamiento.

```typescript
/**
 * Clase Cifrado utilizada para poder cifrar o decifrar un mensaje
 */
export class Cifrado {
  constructor(private clave: string, private text: string, private alfabeto: string, private desp: number) {
    this.clave = clave;
    this.text = text;
    this.alfabeto = alfabeto;
    this.desp = desp;
  }

  /**
   * Obtener la clave
   * @returns {string}
   */
  getClave() {
    return this.clave;
  }
  /**
   * Obtener el numero de desplazamientos
   * @returns {number}
   */
  getDesp() {
    return this.desp;
  }

  /**
   * Obtener el texto
   * @returns {string}
   */
  getText() {
    return this.text;
  }

  /**
   * Obtener el alfabeto
   * @returns {string}
   */
  getAlfabeto() {
    return this.alfabeto;
  }

  /**
   * Remover posibles espacios
   * @returns {string}
   */
  fusionText(m: string) {
    return m.replace(/ /g, "");
  }


  cifrar(): string {
    let res: string = '';
    let temp: number;
    let salto: number = 0;
    const newText: string = this.fusionText(this.text);
    const newKey: string = this.fusionText(this.clave);

    for (let i = 0; i < newText.length; i++) {
      for (let j = 0; j < newKey.length; j++) {
        if (res.length === newText.length) return res;
        desp = this.alfabeto.indexOf(newKey[j]) + this.getDesp();
        temp = (this.alfabeto.indexOf(newText[i]) + salto) % this.alfabeto.length;
        res += this.alfabeto[temp];
        i++;
      }
      i--;
    }

    return res;
  }

  /**
   * Decifrar el mensaje
   * @returns {string}
   */
  decifrar(): string {
    let res: string = '';
    let temp: number;
    let salto: number;
    const newText: string = this.fusionText(this.text);
    const newKey: string = this.fusionText(this.clave);

    for (let i = 0; i < newText.length; i++) {
      for (let j = 0; j < newKey.length; j++) {
        if (res.length === newText.length) return res;
        salto = this.alfabeto.indexOf(newKey[j]) + getDesp();
        temp = (this.alfabeto.indexOf(newText[i]) - salto + this.alfabeto.length) % this.alfabeto.length;
        res += this.alfabeto[temp];
        i++;
      }
      i--;
    }
    return res;
  }
}
```
Como se puede observar en la clase hay, además de los sólitos getters para poder obtener los atributos de manera singular, tres métodos principales:
- **fusionText**: Su función se basa en quitar los carácteres representados como espacios para evitar problemas a la hora de ejecutar la operación de
cifrado o decifrado. Para ello se hace uso de un simple ```replace```.
- **Cifrar**: Se basa en realizar el procedimiento de cifrado. Las primeras operaciones que se hacen consisten en llamar a la función anteriormente 
mencionada tanto para la clave como para el texto. A continuación, recorriendo la clave y el texto (en cada iteración), creamos una variable salto que lo 
que hará es darnos el valor de salto del ```char``` sustitutivo. 
Asignamos el valor de la letra a una variable ```temp``` sumando el salto con el valor obtenido de la posición según el texto y la iteración actual. 
Además, para evitar que salga del rango implementamos la operación del resto(%) con la longitud del alfabeto. Finalmente lo obtenido lo sumamos al 
resultado.
- **Decifrar**: El procedimiento es muy similar al descrito anteriormente, la única diferencia se encuentra a la hora de calcular la primera parte del 
valor de ```temp```. La operación sería justo la inversa, es decir, restar el salto y sumarle la longitud del alfabeto al valor que se obtiene de index 
del alfabeto.

## **CONCLUSIÓN**<a name="id6"></a>
En conclusión podemos afirmar que esta práctica resultó muy útil a la hora de profudizar los conceptos vistos en clase. Cabe decir que se intentó hacer
buen uso e implementación de los principios SOLID, sobretodo los mencionados en los ejercicios 1 y 2.

La práctica me ayudó a mejorar mi conocimiento sobretodo en cuánto a las interfaces y clases genéricas.
