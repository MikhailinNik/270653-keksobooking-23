import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { showMarkers } from './map.js';
import { adverts } from './data.js';

const activatePage = () => {
  activateForm();
  showMarkers(adverts);
  activateFilter();
};

const deactivatePage = () => {
  deactivateForm();
  deactivateFilter();
};

export { activatePage, deactivatePage };


