import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/ejercicio-1/Pokedex';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Combat} from '../src/ejercicio-1/Combat';
import {Marvel} from '../src/ejercicio-1/Marvel';
import {DragonBall} from '../src/ejercicio-1/DragonBall';

describe('Ejercicio 1 - Tests', () => {
  // Creación de objetos
  const bulbasaur: Pokemon = new Pokemon("Bulbasaur", 6.9, 70, 49, 49, 45, "SAUUUUURRR!", "hierba");
  const charmander: Pokemon = new Pokemon("Charmander", 8.5, 60, 52, 43, 39, "Charmander Charmander!", "fuego");
  const venom: Marvel = new Marvel("Venom", 235, 130, 90, 70, 200, "We Are Venom!", "mutante");
  const ironMan: Marvel = new Marvel("Iron Man", 198, 193, 70, 50, 100, "I am Iron Man", "tecnológico");
  const goku: DragonBall = new DragonBall("Goku", 175, 62, 120, 100, 200, "With my newfound power, I can beat anyone!", "amarillo");
  const vegeta: DragonBall = new DragonBall("Vegeta", 164, 56, 110, 100, 200, "Are you ready now to witness a power not seen for thousands of years?", "morado");
  const pokedex: Pokedex = new Pokedex([bulbasaur, charmander, venom, ironMan, goku, vegeta]);
  const combate: Combat = new Combat(bulbasaur, charmander);

  it('Pokedex includes [bulbasaur, charmander, venom, ironMan, goku, vegeta]', () => {
    expect(pokedex.getPokemonPokedex()).to.be.eqls([bulbasaur, charmander, venom, ironMan, goku, vegeta]);
  });

  it('Bulbasaur.getNombre() returns Bulbasaur', () => {
    expect(bulbasaur.getNombre()).to.be.equal("Bulbasaur");
  });

  it('ironMan is not a function', () => {
    expect(ironMan).not.to.be.a('function');
  });

  it('Charmander.getTipo() returns mutante', () => {
    expect(venom.getTipo()).to.be.equal("mutante");
  });

  it('Combate(Bulbasaur, Charmander) gana Charmander', () => {
    expect(combate.start(bulbasaur, charmander)).to.be.equal("Charmander");
  });

  it('Combate(Goku, Vegeta) gana Goku', () => {
    expect(combate.start(goku, vegeta)).to.be.equal("Goku");
  });

  it('Combate(Goku, Venom) gana Goku', () => {
    expect(combate.start(goku, venom)).to.be.equal("Goku");
  });

  it('Combate(Goku, Venom) gana Goku', () => {
    expect(combate.start(charmander, venom)).to.be.equal("Venom");
  });

  it('Combate(IronMan, Bulbasaur) gana Goku', () => {
    expect(combate.start(ironMan, bulbasaur)).to.be.equal("Iron Man");
  });

  it('Combate(Iron Man, Vegeta) gana Goku', () => {
    expect(combate.start(ironMan, vegeta)).to.be.equal("Vegeta");
  });

  it('Combate(Bulbasaur, Goku) gana Goku', () => {
    expect(combate.start(bulbasaur, goku)).to.be.equal("Goku");
  });
});