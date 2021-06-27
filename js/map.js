import { renderCard } from './card.js';
import { activatePage } from './page.js';
import { adverts } from './data.js';

const LAT_CENTR_TOKYO = 35.6894;
const LNG_CENTR_TOKYO = 139.692;

const inputAddress = document.querySelector('#address');

const getMainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const specialMarker = L.marker(
  {
    lat: LAT_CENTR_TOKYO,
    lng: LNG_CENTR_TOKYO,
  },
  {
    draggable: true,
    icon: getMainPinIcon,
  },
);

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
    inputAddress.value = specialMarker.getLatLng();
  })
  .setView({
    lat: 35.6894,
    lng: 139.692,
  }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

specialMarker.addTo(map);

specialMarker.on('moveend', (evt) => {
  const address = evt.target.getLatLng();
  inputAddress.value = `${address.lat.toFixed(5)},${address.lng.toFixed(5)}`;
});

const createMarker = (object) => {
  const groupLayer = L.layerGroup().addTo(map);
  const lat = object.location.lat;
  const lng = object.location.lng;

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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

  marker.addTo(groupLayer).bindPopup(renderCard(object)),
  {
    keepInView: true,
  };
};

const getMarkers = (objects) => {
  objects.forEach((object) => {
    createMarker(object);
  });
};

getMarkers(adverts);
