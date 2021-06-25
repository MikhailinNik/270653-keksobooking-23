import { setDisabled, unsetDisabled } from './util.js';

const form = document.querySelector('.ad-form');
const formContainer = Array.from(form);

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  formContainer.forEach(unsetDisabled);

};

const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  formContainer.forEach(setDisabled);
};

export { activateForm, deactivateForm };
