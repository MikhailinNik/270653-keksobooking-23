import { showAlert } from './util.js';

const methodFetchToUrl = {
  get: 'https://23.javascript.pages.academy/keksobooking/data',
  post: 'https://23.javascript.pages.academy/keksobooking',
};

const getData = (onSuccess) => {
  fetch(methodFetchToUrl.get)
    .then((response) => response.json())
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch(() => {
      showAlert('Не удалось получить данные');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(methodFetchToUrl.post,
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

