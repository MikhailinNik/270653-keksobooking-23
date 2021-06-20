import { renderCard } from './card.js';

const mapCanvas = document.querySelector('#map-canvas');

const offerTypeEnToRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const addCard = (advert) => {
  const card = renderCard(advert);

  mapCanvas.appendChild(card);
};

export { addCard, offerTypeEnToRu };
