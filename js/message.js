import { isEscEvent } from './util.js';

const EventToString = {
  click: 'click',
  keydown: 'keydown',
};

const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');
const bodyItem = document.querySelector('body');

const onItem = (item1, item2, event) => {
  item1.addEventListener(event, () => {
    isEscEvent ? item2.classList.add('hidden') : item2.classList.add('hidden');
  });
};


const showSuccessMessage = () => {
  const message = success.cloneNode(true);
  bodyItem.appendChild(message);

  onItem(document, message, EventToString.click);
  onItem(document, message, EventToString.keydown);
};

const showErrorMessage = () => {
  const message = error.cloneNode(true);
  const errorButton = message.querySelector('.error__button');
  bodyItem.appendChild(message);

  onItem(errorButton, message, EventToString.click);
  onItem(document, message, EventToString.keydown);
  onItem(document, message, EventToString.click);
};

export { showSuccessMessage, showErrorMessage };


