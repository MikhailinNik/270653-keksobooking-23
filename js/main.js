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

  return Number((Math.random() * (max - min) + min).toFixed(digits));
};

getRandomNumber(1, 12);
getRandomNumberFloat(3, 10, 3);


// Задание №8
const TITLES = [
  'Офис',
  '2-ух комнатная квартира',
  '3-ех комнатная квартира',
  'Однокомнатная квартира',
  'Помещение для аренды в торговом центре',
];

const TYPES = [
  'palace', 'flat', 'house', 'bunglow', 'hotel',
];

const CHECKS = [
  '12:00', '13:00', '14:00',
];

const FEATURES = [
  'wifi', 'dishwasher',
  'parking', 'washer',
  'elevator', 'conditioner',
];

const DESCRIPTIONS = [
  'кухня',
  'ванная',
  'гостинная',
  'туалет',
  'спальня',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayItem = (items) => items[getRandomNumber(0, items.length - 1)];

const createOffer = (coord1, coord2) => ({
  title: getRandomArrayItem(TITLES),
  address: `${coord1}, ${coord2}`,
  price: getRandomNumber(1, 1000),
  types: getRandomArrayItem(TYPES),
  rooms: getRandomNumber(1, 5),
  guests: getRandomNumber(1, 15),
  checkin: getRandomArrayItem(CHECKS),
  checkout: getRandomArrayItem(CHECKS),
  features: FEATURES.filter(() => Boolean(getRandomNumber(0, 1))),
  description: getRandomArrayItem(DESCRIPTIONS),
  photos: PHOTOS.filter(() => Boolean(getRandomNumber(0, 1))),
});

const creatAuthor = (id) => {
  if (id !== 10) {
    return ({
      avatar: `img/avatars/user0${id}.png`,
    });
  }

  return ({
    avatar: `img/avatars/user${id}.png`,
  });
};

const createAdvert = (id) => {
  const latitude = getRandomNumberFloat(35.65000, 35.70000, 5);
  const longitude = getRandomNumberFloat(139.70000, 139.80000, 5);

  return ({
    author: creatAuthor(id),
    offer: createOffer(latitude, longitude),
    location: {
      lat: latitude,
      lng: longitude,
    },
  });
};

const adverts = Array.from({ length: 10 }, (value, idx) => createAdvert(idx + 1));
adverts;
