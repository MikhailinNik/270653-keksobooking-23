import { clearElement } from './utils/dom.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMG_DEFAULT = 'img/muffin-grey.svg';
const BORDER = '5px';

const AvatarStyle = {
  WIDTH: 40,
  HEIGHT: 44,
  ALT: 'Аватар пользователя',
};

const PhotoStyle = {
  WIDTH: 70,
  HEIGHT: 70,
  ALT: 'Фотография жилья',
};

const fileInputPreview = document.querySelector('.ad-form-header__input');
const preview = document.querySelector('.ad-form-header__preview');
const photo = document.querySelector('.ad-form__photo');
const fileInputPhoto = document.querySelector('.ad-form__input');

const createImage = (container) => {
  const image = document.createElement('img');
  image.src = '';
  image.width = AvatarStyle.WIDTH;
  image.height = AvatarStyle.HEIGHT;

  if (container === photo) {
    image.width = PhotoStyle.WIDTH;
    image.height = PhotoStyle.HEIGHT;
  }

  image.style.borderRadius = BORDER;
  image.alt = AvatarStyle.ALT;

  if (container === preview) {
    image.alt = PhotoStyle.ALT;
  }

  return image;
};

const resetImage = () => {
  preview.firstChild.src = IMG_DEFAULT;
  clearElement(photo);
};

const addElement = (container) => {
  clearElement(container);
  return container.appendChild(createImage(container));
};

const onFileChange = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((fileExtension) => fileName.endsWith(fileExtension));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      if (evt.target.id === 'avatar') {
        return addElement(preview).src = reader.result;
      }

      addElement(photo).src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

fileInputPreview.addEventListener('change', onFileChange);
fileInputPhoto.addEventListener('change', onFileChange);

export { resetImage };
