/**
 * Importar las clases DB, Pokemon, Marvel
 */
import {DragonBall} from "./DragonBall";
import {Pokemon} from "./Pokemon";
import {Marvel} from "./Marvel";
/**
 * Class Combat - simula el combate entre dos Fighters.
 * Se construye con dos contrincantes.
 * Se realizarán ataques entre los contrincantes hasta que el daño sufrido
 * por uno de ellos sea
 * igual o superior a su HP. Se considera que el primero de los contrincantes
 * que recibe un objeto de la clase Combat será siempre el primero en realizar un ataque.
 *
 * Att.: private primerContrincante: Pokemon,
 *                                   private segundoContrincante: Pokemon;
 * ```typescript
 * combate.start(bulbasaur, charmander) returns El ganador es: Charmander"
 * ```
 */
export class Combat {
  constructor(private primerContrincante: Pokemon|DragonBall|Marvel, private segundoContrincante: Pokemon|DragonBall|Marvel) {
    this.primerContrincante = primerContrincante;
    this.segundoContrincante = segundoContrincante;
  }

  /**
  * Función calculateDMG() Devuelve el daño del ataque
  * @param primerContrincante
  * @param segundoContrincante
  * @returns {number} Daño Ataque
  */
  calculateDmg(primerContrincante: Pokemon|DragonBall|Marvel, segundoContrincante: Pokemon|DragonBall|Marvel): number {
    const superEffective: number = 2;
    const neutral: number = 1;
    const notEffective: number = 0.5;
    const standardDMG: number = 50;
    let dmg: number = 0;

    if (primerContrincante.getTipo() == "fuego" && segundoContrincante.getTipo() == "hierba" ) {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`); // Universo Pokemon
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "hierba" && segundoContrincante.getTipo() == "fuego") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "fuego" && segundoContrincante.getTipo() == "agua") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "fuego" && segundoContrincante.getTipo() == "eléctrico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "agua" && segundoContrincante.getTipo() == "hierba") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "hierba" && segundoContrincante.getTipo() == "agua") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "agua" && segundoContrincante.getTipo() == "eléctrico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "eléctrico" && segundoContrincante.getTipo() == "agua") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "hierba" && segundoContrincante.getTipo() == "eléctrico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "rojo" && segundoContrincante.getTipo() == "amarillo") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);// Universo DB
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "amarillo" && segundoContrincante.getTipo() == "morado") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "rojo" && segundoContrincante.getTipo() == "morado") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "rojo" && segundoContrincante.getTipo() == "verde") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "amarillo" && segundoContrincante.getTipo() == "rojo") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "amarillo" && segundoContrincante.getTipo() == "verde") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "morado" && segundoContrincante.getTipo() == "rojo") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "morado" && segundoContrincante.getTipo() == "amarillo") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "morado" && segundoContrincante.getTipo() == "verde") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "verde" && segundoContrincante.getTipo() == "rojo") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "verde" && segundoContrincante.getTipo() == "amarillo") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "verde" && segundoContrincante.getTipo() == "morado") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "cósmico" && segundoContrincante.getTipo() == "tecnológico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`); // Marvel
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "cósmico" && segundoContrincante.getTipo() == "habilidoso") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "cósmico" && segundoContrincante.getTipo() == "mutante") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "mutante" && segundoContrincante.getTipo() == "habilidoso") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "mutante" && segundoContrincante.getTipo() == "tecnológico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "mutante" && segundoContrincante.getTipo() == "cósmico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "tecnológico" && segundoContrincante.getTipo() == "mutante") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante.getTipo() == "tecnológico" && segundoContrincante.getTipo() == "cósmico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "tecnológico" && segundoContrincante.getTipo() == "habilidoso") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "habilidoso" && segundoContrincante.getTipo() == "mutante") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante.getTipo() == "habilidoso" && segundoContrincante.getTipo() == "cósmico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante.getTipo() == "habilidoso" && segundoContrincante.getTipo() == "tecnológico") {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Mmmmm.. That attack is neutral!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * neutral;
    } else if (primerContrincante instanceof Pokemon && segundoContrincante instanceof Marvel) {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`); // Mezcla Universos
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante instanceof Marvel && segundoContrincante instanceof DragonBall) {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    } else if (primerContrincante instanceof DragonBall && segundoContrincante instanceof Pokemon) {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante instanceof DragonBall && segundoContrincante instanceof Marvel) {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante instanceof Marvel && segundoContrincante instanceof Pokemon) {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`);
      console.log(`WOW! What an effective attack!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * superEffective;
    } else if (primerContrincante instanceof Pokemon && segundoContrincante instanceof DragonBall) {
      console.log(`${primerContrincante.getNombre()}: ${primerContrincante.getCatchingPhrase()} ... *Attack*`); // Mezcla Universos
      console.log(`Oh no! That attack is not effective!`);
      dmg = standardDMG * (primerContrincante.getAtt()/segundoContrincante.getDef()) * notEffective;
    }

    return dmg;
  }

  /**
  * Función start() - simula el combate entre dos Fighters
  * @param primerContrincante
  * @param segundoContrincante
  * @returns {string} El ganador del combate
  */
  start(primerContrincante: Pokemon|DragonBall|Marvel, segundoContrincante: Pokemon|DragonBall|Marvel): string {
    console.log(`Primero contrincante:`);
    primerContrincante.printInfo();
    console.log('\n');
    console.log(`Segundo contrincante:`);
    segundoContrincante.printInfo();
    console.log('\n');
    console.log('Empieza el combate:');

    let hp1: number = 0;
    let hp2: number = 0;

    while (primerContrincante.getHp() > hp1 && segundoContrincante.getHp() > hp2) {
      hp2 += this.calculateDmg(primerContrincante, segundoContrincante);
      console.log(`Segundo contrincante -> HP = ${hp2}`);
      hp1 += this.calculateDmg(segundoContrincante, primerContrincante);
      console.log(`Primer contrincante -> HP = ${hp1}`);
    }

    if ( hp1 >= primerContrincante.getHp()) {
      return segundoContrincante.getNombre();
    } else {
      return primerContrincante.getNombre();
    }
  }
}