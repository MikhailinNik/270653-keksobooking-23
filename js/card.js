const offerTypeEnToRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const photoTemplate = cardTemplate.querySelector('.popup__photos img');

const createFeatureTemplate = (feature) => `<li class="popup__feature popup__feature--${feature}">`;

const renderCardPhotos = (photoContainer, photos) => {
  if (photos === undefined) {
    photoContainer.innerHTML = '';
  } else {
    photos.forEach((photoUrl) => {
      const photo = photoTemplate.cloneNode(true);
      photo.src = photoUrl;

      photoContainer.appendChild(photo);
    });
  }
};

const renderCard = (advert) => {

  const offer = advert.offer;
  const author = advert.author;

  const card = cardTemplate.cloneNode(true);
  const popupPhotoContainer = card.querySelector('.popup__photos');
  const featureList = card.querySelectorAll('.popup__features');

  card.querySelector('.popup__avatar').src = author.avatar;
  card.querySelector('.popup__title').textContent = offer.title === undefined ? '' : offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address === undefined ? '' : offer.address;
  card.querySelector('.popup__text--price').textContent =  offer.price === undefined ? '' : `${offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = offer.type === undefined ? '' : offerTypeEnToRu[offer.type];
  card.querySelector('.popup__text--capacity').textContent = offer.rooms === undefined ? '' : `${offer.rooms} комнаты для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = offer.checkin === undefined || offer.checkout === undefined ? '' : `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  card.querySelector('.popup__description').textContent = offer.description === undefined ? '' : offer.description;

  if (offer.features === undefined) {
    featureList.innerHTML = '';
  } else if (offer.features.length > 0)  {
    featureList.innerHTML = offer.features.map(createFeatureTemplate).join('');
  }
  // featureList.innerHTML = '';
  // if (offer.features.length > 0) {
  //   featureList.innerHTML = offer.features.map(createFeatureTemplate).join('');
  // }

  renderCardPhotos(popupPhotoContainer, offer.photos);

  return card;
};

export {
  renderCard
};


