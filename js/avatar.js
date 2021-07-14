const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMG_DEFAULT = 'img/muffin-grey.svg';

const ImageStyle = {
  WIDTH: [40, 70],
  HEIGHT: [44, 70],
  ALT: ['Фотография жилья', 'Аватар пользователя'],
  BORDER: '5px',
};

const fileInputPreview = document.querySelector('.ad-form-header__input');
const preview = document.querySelector('.ad-form-header__preview');
const photo = document.querySelector('.ad-form__photo');
const fileInputPhoto = document.querySelector('.ad-form__input');

const createImageItem = (divItem) => {
  const image = document.createElement('img');
  image.src = '';
  image.width = ImageStyle.WIDTH[0];
  image.height = ImageStyle.HEIGHT[0];
  if (divItem === photo) {
    image.width = ImageStyle.WIDTH[1];
    image.height = ImageStyle.HEIGHT[1];
  }

  image.style.borderRadius = ImageStyle.BORDER;
  image.alt = ImageStyle.ALT[0];

  if (divItem === preview) {
    image.alt = ImageStyle.ALT[1];
  }

  return image;
};

const removeItem = (item) => {
  item.innerHTML = '';
};

const resetImage = () => {
  preview.firstChild.src = IMG_DEFAULT;
  photo.innerHTML = '';
};

const loadImage = (input, divItem) => {
  input.addEventListener('change', () => {
    const file = input.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((fileExtension) => fileName.endsWith(fileExtension));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        removeItem(divItem);
        divItem.appendChild(createImageItem(divItem));
        divItem.firstChild.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

loadImage(fileInputPreview, preview);
loadImage(fileInputPhoto, photo);

export { resetImage };
