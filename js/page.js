import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { getMarkers } from './map.js';
import { adverts } from './data.js';

const activatePage = () => {
  activateForm();
  activateFilter();
  getMarkers(adverts);
};

const deactivatePage = () => {
  deactivateForm();
  deactivateFilter();
};

export { activatePage, deactivatePage };


