import { groupLayer, showMarkers } from './map.js';
import { setDisabled, unsetDisabled, firstItem, getSecondItem } from './util.js';

const MAX_PRICE = Infinity;

const KeyPrices = {
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
// const featuresInput = housingFeatures.querySelectorAll('input:checked');
const formFiltersContainer = Array.from(formFilters);

const activateFilter = () => {
  formFilters.classList.remove('map-filters--disabled');
  formFiltersContainer.forEach(unsetDisabled);
};

const deactivateFilter = () => {
  formFilters.classList.add('map-filters--disabled');
  formFiltersContainer.forEach(setDisabled);
};

const getType = (array, key, filter) => {
  const arr = array.filter((item) => item.offer[key] === filter.value);
  filter.value === 'any' ?
    array :
    arr;
  // showMarkers(arr);
};

const getPrice = (array, value) => {
  const [min, max] = KeyPrices[value];
  const arr = array.filter((item) => item.offer.price >= min && item.offer.price <= max);
  // showMarkers(arr);
};



/*
const filterFeatures = (a1, a2) => {
  return a1.filter((item) => item.includes(a2.forEach((it) => it)));
};

const getFeaturesItem = (advert) => {

  const ad = advert.map((item) => item.offer.features);
  const featuresInput = housingFeatures.querySelectorAll('input:checked');
  const inputArrValue = Array.from(featuresInput).map((item) => item.value);
  console.log(inputArrValue);

  console.log(filterFeatures(ad, inputArrValue));



};
*/

const showAdvert = (advert) => {
  const one = firstItem;
  const two = getSecondItem();
  const copy = advert.slice(one, two);
  groupLayer.clearLayers();

  const checks = [
  ];
  getType(advert, 'type', housingType);
  getType(advert, 'rooms', housingRooms);
  getType(advert, 'guests', housingGuests);
  getPrice(advert, housingPrice.value);


  return checks.every((feature) => feature(advert))
};


const change = (cb) => formFilters.addEventListener('change', () => cb());

export { activateFilter, deactivateFilter, formFilters, showAdvert, change };
