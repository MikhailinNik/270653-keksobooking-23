import { pluralize } from './util.js';
import { clearElement } from './utils/dom.js';

const offerTypeEnToRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const photoTemplate = cardTemplate.querySelector('.popup__photos img');

const getRooms = (value) => pluralize(value, 'комната', 'комнаты', 'комнат');

const getGuests = (value) => pluralize(value, 'гостя', 'гостей', 'гостей');

const createFeatureTemplate = (feature) => `<li class="popup__feature popup__feature--${feature}">`;

const getFeatureList = (adverts, featureList) => {
  if (adverts === undefined) {
    return clearElement(featureList);
  }

  if (adverts.length > 0) {
    return featureList.innerHTML = adverts.map(createFeatureTemplate).join('');
  }
};

const renderCardPhotos = (photoContainer, photos) => {
  const container = clearElement(photoContainer);
  if (photos !== undefined) {
    return photos.forEach((photoUrl) => {
      const photo = photoTemplate.cloneNode(true);
      photo.src = photoUrl;

      photoContainer.appendChild(photo);
    });
  }
  container;

};

const renderCard = (advert) => {

  const offer = advert.offer;
  const author = advert.author;

  const card = cardTemplate.cloneNode(true);
  const popupPhotoContainer = card.querySelector('.popup__photos');
  const featureList = card.querySelector('.popup__features');

  card.querySelector('.popup__avatar').src = author.avatar;
  card.querySelector('.popup__title').textContent = offer.title === undefined
    ? ''
    : offer.title;

  card.querySelector('.popup__text--address').textContent = offer.address === undefined
    ? ''
    : offer.address;

  card.querySelector('.popup__text--price').textContent = offer.price === undefined
    ? ''
    : `${offer.price} ₽/ночь`;

  card.querySelector('.popup__type').textContent = offer.type === undefined
    ? ''
    : offerTypeEnToRu[offer.type];

  card.querySelector('.popup__text--capacity').textContent = offer.rooms === undefined
    ? ''
    : `${offer.rooms} ${getRooms(offer.rooms)} для ${offer.guests} ${getGuests(offer.guests)}`;

  card.querySelector('.popup__text--time').textContent = offer.checkin === undefined
    || offer.checkout === undefined
    ? ''
    : `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  card.querySelector('.popup__description').textContent = offer.description === undefined
    ? ''
    : offer.description;

  getFeatureList(offer.features, featureList);

  renderCardPhotos(popupPhotoContainer, offer.photos);

  return card;
};

export {
  renderCard
};


