import { setUserFormSubmit } from './form.js';
import './validation.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { createMap } from './map.js';
import { activatePage, deactivatePage } from './page.js';


deactivatePage();

createMap(activatePage);

setUserFormSubmit(showSuccessMessage, showErrorMessage);

