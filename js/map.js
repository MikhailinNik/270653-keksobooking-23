import { renderCard } from './card.js';

const mapCanvas = document.querySelector('#map-canvas');

const addCard = (advert) => {
  const card = renderCard(advert);

  mapCanvas.appendChild(card);
};

export { addCard };
