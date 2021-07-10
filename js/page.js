import { activateForm, deactivateForm } from './form.js';
import { activateFilter, change, deactivateFilter, showAdvert, getFilterAd } from './filter.js';
import { showMarkers } from './map.js';
import { getData } from './api.js';
import { firstItem, getSecondItem } from './util.js';

const activatePage = () => {
  const one = firstItem;
  const two = getSecondItem();
  activateForm();
  getData((advert) => {
    showMarkers(advert.slice(one, two));
    change(() => getFilterAd(advert));

  });
  activateFilter();
};

const deactivatePage = () => {
  deactivateForm();
  deactivateFilter();
};

export { activatePage, deactivatePage };


