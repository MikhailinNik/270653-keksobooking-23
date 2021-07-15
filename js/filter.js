import { setDisabled, unsetDisabled } from './util.js';

const VALUE_ANY = 'any';
const TYPE_OF_FUNCTION = 'function';

const offerPriceToRange = {
  'any': [0, Number.MAX_SAFE_INTEGER],
  'middle': [10000, 50000],
  'low': [0, 10000],
  'high': [50000, Number.MAX_SAFE_INTEGER],
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

const checkOfferType = (offer) => housingType.value === VALUE_ANY || housingType.value === offer.type;

const checkOfferPrice = (offer) => {
  if (housingPrice.value === VALUE_ANY) {
    return true;
  }

  const [min, max] = offerPriceToRange[housingPrice.value];
  return offer.price >= min && offer.price <= max;
};

const checkOfferRooms = (offer) => housingRooms.value === VALUE_ANY || +housingRooms.value === offer.rooms;

const checkOfferGuests = (offer) => housingGuests.value === VALUE_ANY || +housingGuests.value === offer.guests;

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

  for (let i = 0; i < adverts.length; i++) {
    const current = adverts[i];

    if (checkOffer(current.offer)) {
      filteredAdverts.push(current);
    }

    if (filteredAdverts.length === limit) {
      break;
    }
  }

  checkedfeatures = null;

  return filteredAdverts;
};

let onFilterChange = null;

const setFilterChangeHandler = (callback) => {
  onFilterChange = callback;
};

const onFormFiltersChange = (evt) => {
  evt.preventDefault();

  if (typeof onFilterChange === TYPE_OF_FUNCTION) {
    onFilterChange();
  }
};

formFilters.addEventListener('change', onFormFiltersChange);

export {
  setFilterChangeHandler,
  activateFilter,
  deactivateFilter,
  formFilters,
  filterAdverts,
  onFormFiltersChange
};
