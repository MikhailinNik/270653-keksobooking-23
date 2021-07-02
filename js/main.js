import { setUserFormSubmit } from './form.js';
import './map.js';
import './page.js';
import './validation.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

setUserFormSubmit(showSuccessMessage, showErrorMessage);
