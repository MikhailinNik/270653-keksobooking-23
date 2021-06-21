import { adverts } from './data.js';
import { addCard, formFiltersContainer, formFilters } from './map.js';
import { form, formContainer } from './form.js';
import { disableForm, enableForm } from './state.js';

addCard(adverts[6]);

disableForm(formFilters, formFiltersContainer);
disableForm(form, formContainer);

enableForm(formFilters, formFiltersContainer);
enableForm(form, formContainer);
