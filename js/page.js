import { form, formContainer } from './form.js';
import { formFilters, formFiltersContainer } from './filter.js';

const setDisabledItem = (containers, boolean) => containers.forEach((item) => {
  item.disabled = boolean;
});


const disableForm = (item, containers) => {
  if (!item.classList.contains(item.classList[1])) {
    item.classList.add(`${item.classList}--disabled`);
  }

  setDisabledItem(containers, true);
};

const enableForm = (item, containers) => {
  if (!item.classList.contains(item.classList[1])) {
    item.classList.remove(`${item.classList}--disabled`);
  }

  item.classList.remove(item.classList[1]);

  setDisabledItem(containers, false);
};

disableForm(form, formContainer);
enableForm(form, formContainer);

disableForm(formFilters, formFiltersContainer);
enableForm(formFilters, formFiltersContainer);

