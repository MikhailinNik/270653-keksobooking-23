import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { showMarkers, clearMap } from './map.js';
import { getData } from './api.js';
import { setFilterChangeHandler, filterAdverts } from './filter.js';

const BEGIN_INDEX = 0;
const END_INDEX = 10;

const activatePage = () => {
  activateForm();

  getData((adverts) => {
    showMarkers(adverts.slice(BEGIN_INDEX, END_INDEX));
    activateFilter();

    setFilterChangeHandler(() => {
      const filteredAdverts = filterAdverts(adverts, 10);

      clearMap();
      showMarkers(filteredAdverts);
    });
  });
};

const deactivatePage = () => {
  deactivateForm();
  deactivateFilter();
};

export {
  activatePage,
  deactivatePage
};


