import { showAlert } from './util.js';

const RequestUrl = {
  get: 'https://23.javascript.pages.academy/keksobooking/data',
  post: 'https://23.javascript.pages.academy/keksobooking',
};

const getData = (onSuccess) => {
  fetch(RequestUrl.get)
    .then((response) => response.json())
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch(() => {
      showAlert('Не удалось получить данные');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(RequestUrl.post,
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

