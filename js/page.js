import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';

const activatePage = () => {
  activateForm();
  activateFilter();
};

const deactivatePage = () => {
  deactivateForm();
  deactivateFilter();
};

deactivatePage();
export { activatePage };

