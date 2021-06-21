const setDisabledItem = (array, boolean) => array.forEach((item) => {
  item.disabled = boolean;
});


const disableForm = (item, array) => {
  if (!item.classList.contains(item.classList[1])) {
    item.classList.add(`${item.classList}--disabled`);
  }

  setDisabledItem(array, true);
};

const enableForm = (item, array) => {
  if (!item.classList.contains(item.classList[1])) {
    item.classList.remove(`${item.classList}--disabled`);
  }

  item.classList.remove(item.classList[1]);

  setDisabledItem(array, false);
};

export { disableForm, enableForm };
