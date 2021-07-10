import { setDisabled, unsetDisabled } from './util.js';

const MAX_PRICE = Infinity;

const offerPriceToRange = {
  'any': [0, MAX_PRICE],
  'middle': [10000, 50000],
  'low': [0, 10000],
  'high': [50000, MAX_PRICE],
};

const formFilters = document.querySelector('.map__filters');
const housingType = formFilters.querySelector('#housing-type');
const housingPrice = formFilters.querySelector('#housing-price');
const housingRooms = formFilters.querySelector('#housing-rooms');
const housingGuests = formFilters.querySelector('#housing-guests');
const housingFeatures = formFilters.querySelector('#housing-features');

const formFiltersContainer = Array.from(formFilters);

const activateFilter = () => {
  formFilters.classList.remove('map-filters--disabled');
  formFiltersContainer.forEach(unsetDisabled);
};

const deactivateFilter = () => {
  formFilters.classList.add('map-filters--disabled');
  formFiltersContainer.forEach(setDisabled);
};

let checkedfeatures = [];

const checkOfferType = (offer) => housingType.value === 'any' || housingType.value === offer.type;

const checkOfferPrice = (offer) => {
  if (housingPrice.value === 'any') {
    return true;
  }

  const [min, max] = offerPriceToRange[housingPrice.value];
  return offer.price >= min && offer.price <= max;
};

const checkOfferRooms = (offer) => housingRooms.value === 'any' || +housingRooms.value === offer.rooms;

const checkOfferGuests = (offer) => housingGuests.value === 'any' || +housingGuests.value === offer.guests;

const checkFeatures = (offer) => {
  const features = offer.features || [];
  return checkedfeatures.every((feature) => features.includes(feature.value));
};

const checkOffer = (offer) =>
  checkOfferType(offer) &&
  checkOfferPrice(offer) &&
  checkOfferRooms(offer) &&
  checkOfferGuests(offer) &&
  checkFeatures(offer);


const filterAdverts = (adverts, limit) => {
  checkedfeatures = Array.from(housingFeatures.querySelectorAll('input:checked'));

  const filteredAdverts = [];

  // eslint-disable-next-line id-length
  for (let i = 0; i < adverts.length; i++) {
    const current = adverts[i];

    if (checkOffer(current.offer)) {
      filteredAdverts.push(current);
    }

    if (filteredAdverts.length === limit) {
      break;
    }
  }

  return filteredAdverts;
};

let onFilterChange = null;

const setFilterChangeHandler = (callback) => {
  onFilterChange = callback;
};

const onFormFiltersChange = (evt) => {
  evt.preventDefault();

  if (typeof onFilterChange === 'function') {
    onFilterChange();
  }
};

formFilters.addEventListener('change', onFormFiltersChange);

export {
  setFilterChangeHandler,
  activateFilter,
  deactivateFilter,
  formFilters,
  filterAdverts
};
