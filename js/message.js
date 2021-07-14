import { resetForm } from './form.js';

const KeyboardKey = {
  ESCAPE: 'Escape',
  ESC: 'Esc',
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

let onMessageClick = null;
let onMessageKeydown = null;

const removeMessage = () => {
  if (messageSuccess.classList.contains('hidden')) {
    removeClassAndItem(messageSuccess);
  }

  if (messageError.classList.contains('hidden')) {
    removeClassAndItem(messageError);
  }

  document.removeEventListener('click', onMessageClick);
  document.removeEventListener('keydown', onMessageKeydown);
};

onMessageClick = (evt) => {
  addClass(evt);
  removeMessage();

};

onMessageKeydown = (evt) => {
  evt.preventDefault();

  if (evt.key === KeyboardKey.ESCAPE || evt.key === KeyboardKey.ESC) {
    addClass(evt);
    removeMessage();
  }

};

const showSuccessMessage = () => {

  bodyItem.appendChild(messageSuccess);

  resetForm();

  document.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onMessageKeydown);
};

const showErrorMessage = () => {
  bodyItem.appendChild(messageError);
  document.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onMessageKeydown);
};

export { showSuccessMessage, showErrorMessage };


