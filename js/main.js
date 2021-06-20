import { adverts } from './data.js';
import { addCard } from './map.js';
import { disableForm, enableForm } from './form.js';

addCard(adverts[6]);

disableForm();
enableForm();