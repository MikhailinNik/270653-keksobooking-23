import {adverts, FEATURES} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const card = document.querySelector('#card').content;
const popup = card.querySelector('.popup');
const popupTitle = popup.querySelector('.popup__title');
const popupAddress = popup.querySelector('.popup__text--address');
const popupTextPrice = popup.querySelector('.popup__text--price');
const popupType = popup.querySelector('.popup__type');
const popupTextCapacity = popup.querySelector('.popup__text--capacity');
const popupTextTime = popup.querySelector('.popup__text--time');
const popupFeatures = popup.querySelectorAll('.popup__feature');
const popupPhotos = popup.querySelector('.popup__description');
const popupAvatar = popup.querySelector('.popup__avatar');

const similarObject = {
  title: popupTitle.textContent = adverts[0].offer.title,
  address: popupAddress.textContent = adverts[0].offer.address,
  price: popupTextPrice.innerHTML = `${adverts[0].offer.price} ${'<span>₽/ночь</span>'}`,
  type: popupType.textContent = adverts[0].offer.types,
  capacity: popupTextCapacity.textContent = `${adverts[0].offer.rooms} комнаты для ${adverts[0].offer.guests}`,
  time: popupTextTime.textContent = `Заезд после ${adverts[0].offer.checkin}, выезд до ${adverts[0].offer.checkout}`,
  photos: popupPhotos.innerHTML = `<img src='${adverts[0].offer.photos}'>`,
  avatar: popupAvatar.innerHTML = `<img src='${adverts[0].author.avatar}'>`,
};

Object.getOwnPropertyNames(similarObject).forEach((val) => {
  if (similarObject[val] === null) {
    similarObject[val] = null;
    return similarObject;
  }
  return similarObject;
});

const modifiers = FEATURES.map((feature) => `popup__feature--${feature}`);

popupFeatures.forEach((item, index) => {
  const modifier = item.classList[1];

  if (modifier === modifiers[index]) {
    return  popupFeatures[index].textContent = FEATURES[index];
  }
});

const fragment = document.createDocumentFragment();
const copy = popup.cloneNode(true);
fragment.appendChild(copy);
mapCanvas.appendChild(fragment);

export {};
