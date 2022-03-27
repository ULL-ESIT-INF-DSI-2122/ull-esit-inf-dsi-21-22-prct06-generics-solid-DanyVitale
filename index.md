# **PRÁCTICA 5** -  Objetos, clases e interfaces
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
- [x] En esta práctica, solo se podrá comunicar con el profesorado para cualquier tipo de incidencia relacionada con la misma a través de los issues de GitHub del repositorio asignado.
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

### **EJERCICIO 2**<a name="id4"></a>

```typescript

```


```typescript

```

```typescript

```



```typescript

```

### **EJERCICIO 3**<a name="id5"></a>

```typescript

```


```typescript

```

```typescript

```



```typescript

```

## **CONCLUSIÓN**<a name="id6"></a>

