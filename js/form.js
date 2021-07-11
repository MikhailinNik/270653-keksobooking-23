import { setDisabled, unsetDisabled } from './util.js';
import { setDefaultAddressCoordinates, setDefaultCoordinates } from './map.js';
import { formFilters } from './filter.js';
import { sendData } from './api.js';
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

formReset.addEventListener('click', (evt) => {
  evt.preventDefault();

  resetFormAndFilters();
  resetImage();
  setDefaultAddressCoordinates();
  setDefaultCoordinates();
});

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(form),
    );
  });
};

export {
  activateForm,
  deactivateForm,
  setUserFormSubmit,
  resetFormAndFilters
};
