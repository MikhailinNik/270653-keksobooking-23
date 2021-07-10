import { showAlert, firstItem, getSecondItem } from './util.js';

const TEN_ADERTISMENT = 10;

const getData = (onSuccess) => {
  const one = firstItem;
  const two = getSecondItem();
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch(() => {
      showAlert('Не удалось получить данные');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      response.ok ? onSuccess() : onFail();
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };

