import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from '../src/ejercicio-3';
import {StringPrintableCollection} from '../src/ejercicio-3';
import {Collectable} from '../src/ejercicio-3';
import {Printable} from '../src/ejercicio-3';


describe('Ejercicio 3 Tests', () => {
  const n1: Collectable<number> = 1;
  const n2: Collectable<number> = 2;
  const n3: Collectable<number> = 3;
  const arr1: Collectable<number>[] = [n1, n2, n3];
  const arr2: Collectable<string>[] = ['1', '2', '3', '4'];

  const obj1: NumericPrintableCollection<number> = new NumericPrintableCollection(arr1);
  const obj2: StringPrintableCollection<string> = new StringPrintableCollection(arr2);

  /**
   * Comprueba que a la hora de usar la funcion print() se imprima
   *  el listado de elementos
   */
  it('obj1.print() returns [1, 2, 3, 4]', () => {
    expect(obj1.print()).to.be.equal([1, 2, 3, 4]);
  });

  /**
   * Comprueba que a la hora de usar la funcion print() se imprima
   *  el listado de elementos
   */
  it('obj2.print() returns [1, 2, 3, 4]', () => {
    expect(obj2.print()).to.be.equal(['1', '2', '3', '4']);
  });

  /**
   * El test quiere obtener el numero de elementos de obj2
   */
  it('obj2 metodo getlength', () => {
    expect(obj2.getNumberOfItems()).to.be.equal(4);
  });

  /**
   * El test quiere obtener el objeto en la posicion 1 de obj2
   */
  it('obj2 metodo getItem', () => {
    expect(obj2.getItem(1)).to.be.equal('2');
  });

  /**
   * El test quiere obtener el numero de elementos de obj1
   */
  it('obj1 metodo getlength', () => {
    expect(obj1.getNumberOfItems()).to.be.equal(4);
  });

  /**
   * El test quiere añadir el elemento 5 al obj1.
   */
  it('obj1 metodo addItem()', () => {
    expect(obj1.addItem(5)).to.be.equal([1, 2, 3, 4, 5]);
  });
});