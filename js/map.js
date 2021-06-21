import { renderCard } from './card.js';

const mapCanvas = document.querySelector('#map-canvas');
const formFilters = document.querySelector('.map__filters');
const formFiltersContainer = Array.from(formFilters);

const addCard = (advert) => {
  const card = renderCard(advert);

  mapCanvas.appendChild(card);
};

export { addCard, formFilters, formFiltersContainer };
