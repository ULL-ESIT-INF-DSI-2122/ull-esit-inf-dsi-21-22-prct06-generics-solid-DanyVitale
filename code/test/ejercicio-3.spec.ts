import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio-3/Cifrado';

describe('Ejercicio 3 - tests', () => {
  // Creación de objetos
  const cifrado: Cifrado = new Cifrado("CLAVECLAVECLAVECLAV", "HOLA ESTO ES UNA PRUEBA", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", 5);
  const decifrado: Cifrado = new Cifrado("CLAVECLAVECLAVECLAV", "ÑEPANZJTEBBCFPABTGA", "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", 5);

  it('La funciones fusionText() y getText() funcionan correctamente', () => {
    const text: string = cifrado.getText();
    expect(cifrado.fusionText(text)).to.be.equal("HOLAESTOESUNAPRUEBA");
  });

  it('La función getDesp() funciona correctamente', () => {
    const desp: number = cifrado.getDesp();
    expect(desp).to.be.equal(5);
  });

  it('La funciones getClave() y getAlfabeto() funcionan correctamente', () => {
    const clave: string = cifrado.getClave();
    const alfabeto: string = cifrado.getAlfabeto();
    expect(clave).to.be.equal("CLAVECLAVECLAVECLAV");
    expect(alfabeto).to.be.equal("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");
  });

  it('La función cifrado() funciona correctamente', () => {
    expect(cifrado.cifrar()).to.be.equal("ÑEPANZJTEBBCFPABTGA");
  });

  it('La función decifrado() funciona correctamente', () => {
    expect(decifrado.decifrar()).to.be.equal("HOLAESTOESUNAPRUEBA");
  });
});