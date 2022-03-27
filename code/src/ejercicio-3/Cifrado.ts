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
    let desp: number = 0;
    const newText: string = this.fusionText(this.text);
    const newKey: string = this.fusionText(this.clave);

    for (let i = 0; i < newText.length; i++) {
      for (let j = 0; j < newKey.length; j++) {
        if (res.length === newText.length) return res;
        desp = this.alfabeto.indexOf(newKey[j]) + this.getDesp();
        temp = (desp + this.alfabeto.indexOf(newText[i])) % this.alfabeto.length;
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
        salto = this.alfabeto.indexOf(newKey[j]) + 5;
        temp = (this.alfabeto.indexOf(newText[i]) - salto + this.alfabeto.length) % this.alfabeto.length;
        res += this.alfabeto[temp];
        i++;
      }
      i--;
    }
    return res;
  }
}