import {getRandomNumber, getRandomNumberFloat, getRandomArrayItem} from './random.js';

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

export {adverts};
