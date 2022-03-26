import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/ejercicio-1/Pokedex';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Combat} from '../src/ejercicio-1/Combat';
import {Marvel} from '../src/ejercicio-1/Marvel';
import {DragonBall} from '../src/ejercicio-1/DragonBall';

describe('Ejercicio 1 - Tests', () => {
  // Creación de objetos

  // Pokemon
  const bulbasaur: Pokemon = new Pokemon("Bulbasaur", 6.9, 70, 49, 49, 45, "SAUUUUURRR!", "hierba");
  const charmander: Pokemon = new Pokemon("Charmander", 8.5, 60, 52, 43, 39, "Charmander Charmander!", "fuego");
  const pikachu: Pokemon = new Pokemon("Pikachu", 40, 0.6, 55, 40, 35, "Pika Pika Pikaa...", "eléctrico");
  const squirtle: Pokemon = new Pokemon("Squirtle", 50, 9, 48, 65, 44, "SQUIRRRTLE!", "agua");

  // Marvel
  const venom: Marvel = new Marvel("Venom", 235, 130, 90, 70, 200, "We Are Venom!", "mutante");
  const ironMan: Marvel = new Marvel("Iron Man", 198, 193, 70, 50, 100, "I am Iron Man", "tecnológico");
  const capAmerica: Marvel = new Marvel("Capitán América", 188, 109, 65, 60, 100, "I can do this all day..", "cósmico");
  const dareDevil: Marvel = new Marvel("DareDevil", 180, 91, 50, 60, 80, "Puedo prevenir cualquier ataque...", "habilidoso");

  // DragonBall
  const goku: DragonBall = new DragonBall("Goku", 175, 62, 120, 100, 200, "With my newfound power, I can beat anyone!", "amarillo", "Z");
  const vegeta: DragonBall = new DragonBall("Vegeta", 164, 56, 110, 100, 200, "Are you ready now to witness a power not seen for thousands of years?", "morado", "S");
  const gohan: DragonBall = new DragonBall("Gohan", 176, 61, 100, 100, 150, "Kame-hame-haaa...", "verde", "A");
  const trunks: DragonBall = new DragonBall("Trunks", 129, 30, 95, 95, 100, "Wow! So that's what you're capable of...", "rojo", "B");

  // Pokedex y Lucha
  const pokedex: Pokedex = new Pokedex([bulbasaur, charmander, pikachu, squirtle, venom, ironMan, goku, vegeta]);

  it('Contenido del Pokedex', () => {
    expect(pokedex.getPokemonPokedex()).to.be.eqls([bulbasaur, charmander, pikachu, squirtle, venom, ironMan, goku, vegeta]);
  });

  it('Pokemon Tests', () => {
    expect(bulbasaur.getNombre()).to.be.equal("Bulbasaur");
    expect(charmander.getAltura()).to.be.equal(8.5);
    expect(squirtle.getPeso()).to.be.equal(9);
  });

  it('Marvel Tests', () => {
    expect(ironMan).not.to.be.a('function');
    expect(venom.getTipo()).to.be.equal("mutante");
  });

  it('Combates entre Objetos  de tipo Pokemon', () => {
    expect(new Combat(bulbasaur, charmander).start()).to.be.equal("Charmander");
    expect(new Combat(bulbasaur, squirtle).start()).to.be.equal("Bulbasaur");
    expect(new Combat(bulbasaur, pikachu).start()).to.be.equal("Bulbasaur");

    expect(new Combat(charmander, bulbasaur).start()).to.be.equal("Charmander");
    expect(new Combat(charmander, squirtle).start()).to.be.equal("Charmander");
    expect(new Combat(charmander, pikachu).start()).to.be.equal("Charmander");

    expect(new Combat(pikachu, charmander).start()).to.be.equal("Charmander");
    expect(new Combat(pikachu, squirtle).start()).to.be.equal("Pikachu");
    expect(new Combat(pikachu, bulbasaur).start()).to.be.equal("Bulbasaur");

    expect(new Combat(squirtle, charmander).start()).to.be.equal("Charmander");
    expect(new Combat(squirtle, bulbasaur).start()).to.be.equal("Bulbasaur");
    expect(new Combat(squirtle, pikachu).start()).to.be.equal("Pikachu");
  });

  it('Combates entre Objetos de tipo DragonBall', () => {
    expect(new Combat(goku, vegeta).start()).to.be.equal("Goku");
    expect(new Combat(goku, gohan).start()).to.be.equal("Goku");
    expect(new Combat(goku, trunks).start()).to.be.equal("Trunks");

    expect(new Combat(gohan, goku).start()).to.be.equal("Goku");
    expect(new Combat(gohan, vegeta).start()).to.be.equal("Vegeta");
    expect(new Combat(gohan, trunks).start()).to.be.equal("Gohan");

    expect(new Combat(trunks, goku).start()).to.be.equal("Trunks");
    expect(new Combat(trunks, vegeta).start()).to.be.equal("Vegeta");
    expect(new Combat(trunks, gohan).start()).to.be.equal("Gohan");

    expect(new Combat(vegeta, goku).start()).to.be.equal("Goku");
    expect(new Combat(vegeta, trunks).start()).to.be.equal("Vegeta");
    expect(new Combat(vegeta, gohan).start()).to.be.equal("Vegeta");
  });

  it('Combates entre Objetos de tipo Marvel', () => {
    expect(new Combat(venom, dareDevil).start()).to.be.equal("Venom");
    expect(new Combat(venom, capAmerica).start()).to.be.equal("Venom");
    expect(new Combat(venom, ironMan).start()).to.be.equal("Iron Man");

    expect(new Combat(ironMan, venom).start()).to.be.equal("Iron Man");
    expect(new Combat(ironMan, dareDevil).start()).to.be.equal("DareDevil");
    expect(new Combat(ironMan, capAmerica).start()).to.be.equal("Capitán América");

    expect(new Combat(capAmerica, dareDevil).start()).to.be.equal("Capitán América");
    expect(new Combat(capAmerica, venom).start()).to.be.equal("Venom");
    expect(new Combat(capAmerica, ironMan).start()).to.be.equal("Capitán América");

    expect(new Combat(dareDevil, venom).start()).to.be.equal("Venom");
    expect(new Combat(dareDevil, ironMan).start()).to.be.equal("Iron Man");
    expect(new Combat(dareDevil, capAmerica).start()).to.be.equal("Capitán América");
  });

  it('Combates entre Objetos de diferentes universos', () => {
    expect(new Combat(goku, venom).start()).to.be.equal("Goku");
    expect(new Combat(goku, pikachu).start()).to.be.equal("Goku");

    expect(new Combat(charmander, venom).start()).to.be.equal("Venom");
    expect(new Combat(bulbasaur, goku).start()).to.be.equal("Goku");

    expect(new Combat(ironMan, bulbasaur).start()).to.be.equal("Iron Man");
    expect(new Combat(venom, vegeta).start()).to.be.equal("Vegeta");
  });
});