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
  constructor(protected nombre: string, protected altura: number, protected peso: number, protected att: number, protected def: number, protected hp: number,
              protected catchingPhrase: string, protected tipo: string, private tier: string) {
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