const clearElement = (element) => {
  element.innerHTML = '';
};

const setDisabled = (element) => {
  element.disabled = true;
};

const unsetDisabled = (element) => {
  element.disabled = false;
};

export {
  clearElement,
  setDisabled,
  unsetDisabled
};
