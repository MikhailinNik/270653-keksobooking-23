import { renderCard } from './card.js';
import { activatePage } from './page.js';
import { form, formReset } from './form.js';
import { formFilters } from './filter.js';

const TokyoCenterCoord = {
  LAT: 35.6894,
  LNG: 139.692,
};

const MAIN_ICON = {
  path: './img/main-pin.svg',
  size: [52, 52],
  anchor: [26, 52],
};

const OTHER_ICON = {
  path: './img/pin.svg',
  size: [40, 40],
  anchor: [20, 40],
};

const inputAddress = document.querySelector('#address');

const renderInputAddress = (marker) => {
  const address = marker.getLatLng();
  inputAddress.value = `${address.lat.toFixed(5)}, ${address.lng.toFixed(5)}`;
};

const mainPinIcon = L.icon({
  iconUrl: MAIN_ICON.path,
  iconSize: MAIN_ICON.size,
  iconAnchor: MAIN_ICON.anchor,
});

const specialMarker = L.marker(
  {
    lat: TokyoCenterCoord.LAT,
    lng: TokyoCenterCoord.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const setDefaultCoordinates = () => {
  specialMarker.setLatLng({
    lat: TokyoCenterCoord.LAT,
    lng: TokyoCenterCoord.LNG,
  });
};

const setDefaultAddressCoordinates = () => {
  const defaultLatCoord = TokyoCenterCoord.LAT.toFixed(5);
  const defaultLngCoord = TokyoCenterCoord.LNG.toFixed(5);
  inputAddress.value = `${defaultLatCoord}, ${defaultLngCoord}`;
};

const map = L.map('map-canvas');

specialMarker.addTo(map);

specialMarker.on('drag', () => {
  renderInputAddress(specialMarker);
});

const createMarker = (advert) => {
  const groupLayer = L.layerGroup().addTo(map);
  const lat = advert.location.lat;
  const lng = advert.location.lng;

  const icon = L.icon({
    iconUrl: OTHER_ICON.path,
    iconSize: OTHER_ICON.size,
    iconAnchor: OTHER_ICON.anchor,
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker.addTo(groupLayer).bindPopup(renderCard(advert)),
  {
    keepInView: true,
  };
};

const showMarkers = (adverts) => {
  adverts.forEach(createMarker);
};

map.on('load', () => {
  renderInputAddress(specialMarker);
  activatePage();
})
  .setView({
    lat: TokyoCenterCoord.LAT,
    lng: TokyoCenterCoord.LNG,
  }, 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const resetFormAndFilters = () => {
  form.reset();
  formFilters.reset();
};

formReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetFormAndFilters();
  setDefaultAddressCoordinates();
  setDefaultCoordinates();
});

export {
  TokyoCenterCoord,
  showMarkers,
  resetFormAndFilters,
  setDefaultAddressCoordinates,
  setDefaultCoordinates
};

