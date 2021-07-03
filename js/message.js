import { resetFormAndFilters, setDefaultAddressCoordinates, setDefaultCoordinates } from './map.js';

const ESCAPE_KEY = {
  key1: 'Escape',
  key2: 'Esc',
};

const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');
const bodyItem = document.querySelector('body');
const messageSucces = success.cloneNode(true);
const messageError = error.cloneNode(true);

const removeMessage = () => {
  if (messageSucces.classList.contains('hidden')) {
    messageSucces.classList.remove('hidden');
    messageSucces.remove();
  }

  if (messageError.classList.contains('hidden')) {
    messageError.classList.remove('hidden');
    messageError.remove();
  }
};

const onMessageClick = (evt) => {
  evt.currentTarget.contains(messageSucces) ?
    messageSucces.classList.add('hidden') :
    messageError.classList.add('hidden');

  document.removeEventListener('click', onMessageClick);

  removeMessage();
};

const onMessageKeydown = (evt) => {
  if (evt.key === ESCAPE_KEY.key1 || evt.key === ESCAPE_KEY.key2) {
    evt.preventDefault();

    evt.currentTarget.contains(messageSucces) ?
      messageSucces.classList.add('hidden') :
      messageError.classList.add('hidden');
  } else {
    removeMessage();
  }

  document.removeEventListener('keydown', onMessageKeydown);

};

const showSuccessMessage = () => {

  bodyItem.appendChild(messageSucces);

  resetFormAndFilters();
  setDefaultAddressCoordinates();
  setDefaultCoordinates();

  document.addEventListener('click', onMessageClick);

  document.addEventListener('keydown', onMessageKeydown);
};

const showErrorMessage = () => {
  bodyItem.appendChild(messageError);
  document.addEventListener('click', onMessageClick);

  document.addEventListener('keydown', onMessageKeydown);
};

export { showSuccessMessage, showErrorMessage };


