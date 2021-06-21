import { form, formContainer } from './form.js';
import { formFilters, formFiltersContainer } from './filter.js';

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

disableForm(form, formContainer);
enableForm(form, formContainer);

disableForm(formFilters, formFiltersContainer);
enableForm(formFilters, formFiltersContainer);

