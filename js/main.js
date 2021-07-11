import { setUserFormSubmit } from './form.js';
import './validation.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { createMap } from './map.js';
import { activatePage } from './page.js';
import { deactivateFilter } from './filter.js';
// import { change, changeFilePreview } from './avatar.js';
import { resetImage } from './avatar.js';

deactivateFilter();

createMap(activatePage);

resetImage();
// changeImage(changeFilePreview(fileInputPhoto, photo));
// changeFilePreview(fileChooserPreview, userPreview);
// changeFilePreview(change);

setUserFormSubmit(showSuccessMessage, showErrorMessage);

