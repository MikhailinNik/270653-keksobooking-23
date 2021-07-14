import { setDisabled, unsetDisabled, MAX_ADVERTS } from './util.js';
import { clearMap, setDefaultAddressCoordinates, setDefaultCoordinates, showMarkers } from './map.js';
import { formFilters } from './filter.js';
import { getData, sendData } from './api.js';
import { resetImage } from './avatar.js';

const form = document.querySelector('.ad-form');
const formReset = form.querySelector('.ad-form__reset');
const formContainer = Array.from(form);

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  formContainer.forEach(unsetDisabled);
};

const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  formContainer.forEach(setDisabled);
};

const resetFormAndFilters = () => {
  form.reset();
  formFilters.reset();
};
const resetForm = () => {
  resetFormAndFilters();
  resetImage();
  setDefaultAddressCoordinates();
  setDefaultCoordinates();
  clearMap();
  getData((adverts) => {
    showMarkers(adverts.slice(0, MAX_ADVERTS));
  });
};

formReset.addEventListener('click', (evt) => {
  evt.preventDefault();

  resetForm();
});

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      onSuccess,
      onFail,
      new FormData(form),
    );
  });
};

export {
  activateForm,
  deactivateForm,
  setUserFormSubmit,
  resetForm
};
