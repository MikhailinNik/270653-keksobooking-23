import {adverts} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const card = document.querySelector('#card').content;
const popup = card.querySelector('.popup');
const popupTitle = popup.querySelector('.popup__title');
const popupAddress = popup.querySelector('.popup__text--address');
const popupTextPrice = popup.querySelector('.popup__text--price');
const popupType = popup.querySelector('.popup__type');
const popupTextCapacity = popup.querySelector('.popup__text--capacity');
const popupTextTime = popup.querySelector('.popup__text--time');
const popupDescription = popup.querySelector('.popup__description');
const popupAvatar = popup.querySelector('.popup__avatar');
const popupPhoto = popup.querySelector('.popup__photo');
const featureListElement = popup.querySelector('.popup__features');
const popupFeature = featureListElement.querySelectorAll('.popup__feature');

const getPopupFeature = () => {
  const modifiers = adverts[0].offer.features.map((feature) => `popup__feature--${feature}`);

  popupFeature.forEach((item) => {
    const modifier = item.classList[1];

    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  return modifiers;
};

const someAdvert = adverts.map((item) => ({
  avatar: popupAvatar.setAttribute('src', item.author.avatar),
  title: popupTitle.textContent = item.offer.title,
  address: popupAddress.textContent = item.offer.address,
  price: popupTextPrice.textContent = `${item.offer.price} ₽/ночь`,
  type: popupType.textContent = item.offer.type,
  capacity: popupTextCapacity.textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`,
  time: popupTextTime.textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`,
  features: getPopupFeature(),
  description: popupDescription.innerHTML = item.offer.description,
  photo: item.offer.photo.forEach((element, index) => {
    popupPhoto.setAttribute('src', element[index]);
  }),
}));

const condition = (array) => {
  array.forEach((element, index) => {
    const obj = array[index];
    Object.entries(obj).forEach(([key, value], idx) => {
      if (value === undefined) {
        delete obj[key];
        popup.children[idx].style.display = 'none';
      }
    });

  });

  return array;
};

condition(someAdvert);

const copy =popup.cloneNode(true);
mapCanvas.appendChild(copy);


