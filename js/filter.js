import { setDisabled, unsetDisabled } from './util.js';

const formFilters = document.querySelector('.map__filters');
const formFiltersContainer = Array.from(formFilters);

const activateFilter = () => {
  formFilters.classList.remove('map-filters--disabled');
  formFiltersContainer.forEach(unsetDisabled);

};

const deactivateFilter = () => {
  formFilters.classList.add('map-filters--disabled');
  formFiltersContainer.forEach(setDisabled);
};

export { activateFilter, deactivateFilter };
