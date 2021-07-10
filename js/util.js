const ALERT_SHOW_TIME = 5000;

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

export { setDisabled, unsetDisabled, showAlert };
