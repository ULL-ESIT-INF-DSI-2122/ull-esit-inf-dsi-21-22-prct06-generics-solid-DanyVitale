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
  constructor(protected nombre: string, protected altura: number, protected peso: number, protected att: number, protected def: number, protected hp: number,
            protected catchingPhrase: string, protected tipo: string) {
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