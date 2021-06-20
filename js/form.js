const form = document.querySelector('.ad-form');
const formFilters = document.querySelector('.map__filters');

const formContainer = Array.from(form);
const formFiltersContainer = Array.from(formFilters);


const disableForm = () => {
  form.classList.add('ad-form--disabled');
  formFilters.classList.add('map__filters--disabled');

  formContainer.forEach((item) => item.disabled = true);
  formFiltersContainer.forEach((item) => item.disabled = true);
};

const enableForm = () => {
  form.classList.remove('ad-form--disabled');
  formFilters.classList.remove('map__filters--disabled');

  formContainer.forEach((item) => item.disabled = false);
  formFiltersContainer.forEach((item) => item.disabled = false);
};

export { disableForm, enableForm };
