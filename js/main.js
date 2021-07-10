import { setUserFormSubmit } from './form.js';
import './validation.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { createMap } from './map.js';
import { activatePage } from './page.js';
import { deactivateFilter } from './filter.js';

deactivateFilter();

createMap(activatePage);

setUserFormSubmit(showSuccessMessage, showErrorMessage);
