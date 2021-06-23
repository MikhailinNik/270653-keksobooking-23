import { form, formContainer } from './form.js';
import { formFilters, formFiltersContainer } from './filter.js';

const setDisabledItem = (container, boolean) => container.forEach((item) => {
  item.disabled = boolean;
});


const disableForm = (item, container) => {
  if (!item.classList.contains(item.classList[1])) {
    item.classList.add(`${item.classList}--disabled`);
  }

  setDisabledItem(container, true);
};

const enableForm = (item, container) => {
  if (!item.classList.contains(item.classList[1])) {
    item.classList.remove(`${item.classList}--disabled`);
  }

  item.classList.remove(item.classList[1]);

  setDisabledItem(container, false);
};

disableForm(form, formContainer);
enableForm(form, formContainer);

disableForm(formFilters, formFiltersContainer);
enableForm(formFilters, formFiltersContainer);

