import Validator from '../app';

test('validate user name', () => {
  const name = 'Abc_123-D';
  const user = new Validator(name);

  const received = user.validateUserName();

  expect(received).toBe(name);
});

test('validate user name', () => {
  const name = 'Abc_123-4-D';
  const user = new Validator(name);

  const received = user.validateUserName();

  expect(received).toBe(name);
});

test('validate user name', () => {
  expect(() => {
    const name = 'Abc@_123-D';
    const user = new Validator(name);

    user.validateUserName();
  }).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('validate user name', () => {
  expect(() => {
    const name = '1Abc_123-D';
    const user = new Validator(name);

    user.validateUserName();
  }).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('validate user name', () => {
  expect(() => {
    const name = 'Abc_123-D0';
    const user = new Validator(name);

    user.validateUserName();
  }).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('validate user name', () => {
  expect(() => {
    const name = '-Abc_123-D';
    const user = new Validator(name);

    user.validateUserName();
  }).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('validate user name', () => {
  expect(() => {
    const name = 'Abc_123-D_';
    const user = new Validator(name);

    user.validateUserName();
  }).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('validate user name', () => {
  expect(() => {
    const name = 'Abc_1234-D';
    const user = new Validator(name);

    user.validateUserName();
  }).toThrow('Имя не должно содержать подряд более трёх цифр.');
});
