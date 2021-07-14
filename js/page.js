import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { showMarkers, clearMap, setDefaultAddressCoordinates } from './map.js';
import { getData } from './api.js';
import { setFilterChangeHandler, filterAdverts } from './filter.js';
import { debounce, MAX_ADVERTS } from './util.js';

const activatePage = () => {
  activateForm();

  getData((adverts) => {
    showMarkers(adverts.slice(0, MAX_ADVERTS));
    activateFilter();

    setFilterChangeHandler(debounce(() => {
      const filteredAdverts = filterAdverts(adverts, MAX_ADVERTS);

      clearMap();
      showMarkers(filteredAdverts);
    }));
  });
};

const deactivatePage = () => {
  setDefaultAddressCoordinates();
  deactivateForm();
  deactivateFilter();
};

export {
  activatePage,
  deactivatePage
};


