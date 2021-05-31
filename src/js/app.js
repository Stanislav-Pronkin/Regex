// TODO: write your code here
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    const symbolNotCorr = /[^\w-]/.test(this.name);
    const sequence = /^[^\d_-][\w-]+[^\d_-]$/.test(this.name);
    const digits = /\d{4,}/.test(this.name);

    if (symbolNotCorr) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (!sequence) {
      throw new Error('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
    }
    if (digits) {
      throw new Error('Имя не должно содержать подряд более трёх цифр.');
    }
    return this.name;
  }
}
