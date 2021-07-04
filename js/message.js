import { resetFormAndFilters, setDefaultAddressCoordinates, setDefaultCoordinates } from './map.js';

const EscapeKey = {
  KEY1: 'Escape',
  KEY2: 'Esc',
};

const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');
const bodyItem = document.querySelector('body');
const messageSuccess = success.cloneNode(true);
const messageError = error.cloneNode(true);

const addClass = (evt) => {
  evt.currentTarget.contains(messageSuccess) ?
    messageSuccess.classList.add('hidden') :
    messageError.classList.add('hidden');
};

const removeClassAndItem = (item) => {
  item.classList.remove('hidden');
  item.remove();
};

const removeMessage = () => {
  if (messageSuccess.classList.contains('hidden')) {
    removeClassAndItem(messageSuccess);
  }

  if (messageError.classList.contains('hidden')) {
    removeClassAndItem(messageError);
  }
};

const onMessageClick = (evt) => {
  addClass(evt);
  document.removeEventListener('click', onMessageClick);
  removeMessage();
};

const onMessageKeydown = (evt) => {
  if (evt.key === EscapeKey.KEY1 || evt.key === EscapeKey.KEY2) {
    evt.preventDefault();
    addClass(evt);
  }

  removeMessage();
  document.removeEventListener('keydown', onMessageKeydown);

};

const showSuccessMessage = () => {

  bodyItem.appendChild(messageSuccess);

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


