const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMG_DEFAULT = 'img/muffin-grey.svg';

const fileInputPreview = document.querySelector('.ad-form-header__input');
const preview = document.querySelector('.ad-form-header__preview');
const photo = document.querySelector('.ad-form__photo');
const fileInputPhoto = document.querySelector('.ad-form__input');

const createItem = (item) => {
  const image = document.createElement('img');
  image.src = '';
  image.width = 40;
  image.height = 44;
  if (item === photo) {
    image.width = 70;
    image.height = 70;
  }

  image.style.borderRadius = '5px';
  image.alt = 'Фотография жилья';

  if (item === preview) {
    image.alt = 'Аватар пользователя';
  }

  return item.appendChild(image);
};

const removeItem = (item) => item.innerHTML = '';

const resetImage = () => {
  preview.firstChild.src = IMG_DEFAULT;
  photo.innerHTML = '';
};

const loadImage = (input, item) => {
  input.addEventListener('change', () => {
    const file = input.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        removeItem(item);
        createItem(item);
        item.firstChild.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

loadImage(fileInputPreview, preview);
loadImage(fileInputPhoto, photo);

export { resetImage };
