// Вспомогательные функции
// Задание №1
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw new RangeError('One of parametr could not less 0');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Задание №2
const getRandomNumberFloat = (min, max, digits) => {
  if (min < 0 || max < 0) {
    throw new RangeError('One of parametr could not less 0');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return (Math.random() * (max - min) + min).toFixed(digits);
};

getRandomNumber(1, 12);
getRandomNumberFloat(3, 10, 3);

// 1. Добавил стрелочные функции
// 2. Изменил названием 3-его параметра во второй функции
// 3. Добавил каждой функции в условие исключение RangeError
