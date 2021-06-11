// Функция для получения случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw new RangeError('One of parametr could not less 0');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для получения случайного числа в заданном дипазоне с плавающей точкей
const getRandomNumberFloat = (min, max, digits) => {
  if (min < 0 || max < 0) {
    throw new RangeError('One of parametr could not less 0');
  }

  return Number((Math.random() * (max - min) + min).toFixed(digits));
};

// Функция для получения случайного элемента заданного массива
const getRandomArrayItem = (items) => items[getRandomNumber(0, items.length - 1)];

export {getRandomNumber, getRandomNumberFloat, getRandomArrayItem};
