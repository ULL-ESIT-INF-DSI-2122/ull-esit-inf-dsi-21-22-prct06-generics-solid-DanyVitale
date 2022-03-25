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