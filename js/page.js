import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { showMarkers } from './map.js';
import { getData } from './api.js';

const activatePage = () => {
  activateForm();
  getData((advert) => {
    showMarkers(advert);
  });
  activateFilter();
};

const deactivatePage = () => {
  deactivateForm();
  deactivateFilter();
};

export { activatePage, deactivatePage };


