import { ALERT_SHOW_TIME, TIMEOUT } from './utils/consts.js';

const createContainer = (message) => {
  const alertContainer = document.createElement('div');
  const style = alertContainer.style;

  style.zIndex = '100';
  style.position = 'absolute';
  style.left = '0';
  style.top = '0';
  style.right = '0';
  style.padding = '10px 3px';
  style.fontSize = '30px';
  style.textAlign = 'center';
  style.backgroundColor = 'red';

  alertContainer.textContent = message;

  return alertContainer;
};

const timeout = (timeoutId = ALERT_SHOW_TIME, callback) => {
  setTimeout(() => {
    const container = callback;
    container.remove();
  }, timeoutId);
};

const createAlert = ((message) => {
  const container = createContainer(message);
  document.body.append(container);
  timeout(ALERT_SHOW_TIME, container);
});

const pluralize = (value, one, two, five) => {
  const mod100 = Math.abs(value % 100);
  if (mod100 > 10 && mod100 < 20) {
    return five;
  }

  const mod10 = mod100 % 10;
  if (mod10 > 1 && mod10 < 5) {
    return two;
  }

  return mod10 === 1 ? one : five;
};

const debounce = (callback, timeoutDelay = TIMEOUT) => {
  let timeoutId = 0;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(null, rest), timeoutDelay);
  };
};

export {
  createAlert,
  pluralize,
  debounce
};
