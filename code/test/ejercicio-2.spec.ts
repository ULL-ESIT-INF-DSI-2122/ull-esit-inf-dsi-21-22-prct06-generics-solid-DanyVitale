import 'mocha';
import {expect} from 'chai';
import {Documental, DocumentalStreamable} from '../src/ejercicio-2/Documental';
import {SerieTV, SerieTVStreamable} from '../src/ejercicio-2/SerieTV';
import {Peli, PeliStreamable} from '../src/ejercicio-2/Peli';
import {BasicStreamableCollection} from '../src/ejercicio-2/BasicStreamableCollection';

describe('Ejercicio 2 - tests/documentales', () => {
  // Creación Objetos
  const TSD: Documental = new Documental("The Social Dilemma", 2020, 94);
  const theGreatHack: Documental = new Documental("The Great Hack", 2019, 140);
  const audible: Documental = new Documental("Audible", 2021, 39);
  const catalogo = new DocumentalStreamable([theGreatHack, audible]);

  it('Catalogo hereda de BasicStreamableCollection', () => {
    expect(catalogo).to.be.instanceOf(BasicStreamableCollection);
  });

  it('Los metodos AddStream y GetStream funcionan correctamente', () => {
    catalogo.addStream(TSD);
    expect(catalogo.getStream(2)).to.be.eql(TSD);
  });

  it('Se puede imprimir la información', () => {
    catalogo.printInfo();
    expect("printInfo" in catalogo).to.be.true;
  });

  it('Catalogo es un objeto de tipo DocumentalStreamable', () => {
    expect(catalogo).to.be.instanceOf(DocumentalStreamable);
  });

  it('El método getNumberOfStreams() funciona correctamente', () => {
    expect(catalogo.getNumberOfStreams()).to.be.equal(3);
  });

  it('El método removeStream funciona correctamente', () => {
    catalogo.deleteStream("The Social Dilemma");
    expect(catalogo.getCatalogo()).to.be.eql([theGreatHack, audible]);
  });

  it('Los métodos Searchable funcionan correctamente', () => {
    expect(catalogo.searchByName("The Great Hack")).to.be.eql([theGreatHack]);
    expect(catalogo.searchByYear(1717)).to.be.eql([]);
    expect(catalogo.searchByYear(2019)).to.be.eql([theGreatHack]);
  });
});

describe('Ejercicio 2 - tests/SerieTV', () => {
  // Creación de objetos
  const BL: SerieTV = new SerieTV("The Blacklist", "Drama", 2013, 9);
  const AR: SerieTV = new SerieTV("Alex Rider", "Acción", 2020, 2);
  const PB: SerieTV = new SerieTV("Peaky Blinders", "Drama", 2013, 6);
  const catalogo = new SerieTVStreamable([PB, AR]);

  it('Catalogo hereda de BasicStreamableCollection', () => {
    expect(catalogo).to.be.instanceOf(BasicStreamableCollection);
  });

  it('Los metodos AddStream y GetStream funcionan correctamente', () => {
    catalogo.addStream(BL);
    expect(catalogo.getStream(2)).to.be.eql(BL);
  });

  it('Se puede imprimir la información', () => {
    catalogo.printInfo();
    expect("printInfo" in catalogo).to.be.true;
  });

  it('Catalogo es un objeto de tipo DocumentalStreamable', () => {
    expect(catalogo).to.be.instanceOf(SerieTVStreamable);
  });

  it('El método getNumberOfStreams() funciona correctamente', () => {
    expect(catalogo.getNumberOfStreams()).to.be.equal(3);
  });

  it('El método removeStream funciona correctamente', () => {
    catalogo.deleteStream("Alex Rider");
    expect(catalogo.getCatalogo()).to.be.eql([PB, BL]);
  });

  it('Los métodos Searchable funcionan correctamente', () => {
    expect(catalogo.searchByName("Peaky Blinders")).to.be.eql([PB]);
    expect(catalogo.searchByYear(1717)).to.be.eql([]);
    expect(catalogo.searchByYear(2013)).to.be.eql([PB, BL]);
  });
});

describe('Ejercicio 2 - tests/Peli', () => {
  // Creación de objetos
  const avatar: Peli = new Peli("Avatar", "Acción", 2009, "James Cameron", "Sam Worthington");
  const twws: Peli = new Peli("The Wolf of Wall Street", "Drama", 2013, "Martin Scorsese", "Leonardo Di Caprio");
  const dlu: Peli = new Peli("Don't Look Up", "Comedia", 2021, "Adam McKay", "Leonardo Di Caprio");
  const catalogo = new PeliStreamable([dlu, twws]);

  it('Catalogo hereda de BasicStreamableCollection', () => {
    expect(catalogo).to.be.instanceOf(BasicStreamableCollection);
  });

  it('Los metodos AddStream y GetStream funcionan correctamente', () => {
    catalogo.addStream(avatar);
    expect(catalogo.getStream(2)).to.be.eql(avatar);
  });

  it('Se puede imprimir la información', () => {
    catalogo.printInfo();
    expect("printInfo" in catalogo).to.be.true;
  });

  it('Catalogo es un objeto de tipo DocumentalStreamable', () => {
    expect(catalogo).to.be.instanceOf(PeliStreamable);
  });

  it('El método getNumberOfStreams() funciona correctamente', () => {
    expect(catalogo.getNumberOfStreams()).to.be.equal(3);
  });

  it('El método removeStream funciona correctamente', () => {
    catalogo.deleteStream("Avatar");
    expect(catalogo.getCatalogo()).to.be.eql([dlu, twws]);
  });

  it('Los métodos Searchable funcionan correctamente', () => {
    expect(catalogo.searchByName("The Wolf of Wall Street")).to.be.eql([twws]);
    expect(catalogo.searchByYear(1717)).to.be.eql([]);
    expect(catalogo.searchByYear(2021)).to.be.eql([dlu]);
  });
});