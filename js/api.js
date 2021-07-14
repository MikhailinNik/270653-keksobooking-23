import { showAlert } from './util.js';

const RequestUrl = {
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
  POST: 'https://23.javascript.pages.academy/keksobooking',
};

const METHOD_POST = 'POST';

const getData = (onSuccess) => {
  fetch(RequestUrl.GET)
    .then((response) => response.json())
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch(() => {
      showAlert('Не удалось получить данные');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(RequestUrl.POST,
    {
      method: METHOD_POST,
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

