const ALERT_SHOW_TIME = 5000;
const TIMEOUT = 500;
const MAX_ADVERTS = 10;

const setDisabled = (element) => {
  element.disabled = true;
};

const unsetDisabled = (element) => {
  element.disabled = false;
};

const showAlert = (message) => {
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

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

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

const debounce = (callback, timeoutDelay) => {
  timeoutDelay = TIMEOUT;

  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { setDisabled, unsetDisabled, showAlert, pluralize, debounce, MAX_ADVERTS };
