import { renderCard } from './card.js';
import { activatePage } from './page.js';

const TokyoCenterCoord = {
  LAT: 35.6894,
  LNG: 139.692,
};

const mainIcon = {
  path: './img/main-pin.svg',
  size: [52, 52],
  anchor: [26, 52],
};

const otherIcon = {
  path: './img/pin.svg',
  size: [40, 40],
  anchor: [20, 40],
};

const inputAddress = document.querySelector('#address');

const mainPinIcon = L.icon({
  iconUrl: mainIcon.path,
  iconSize: mainIcon.size,
  iconAnchor: mainIcon.anchor,
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

const map = L.map('map-canvas');

specialMarker.addTo(map);

specialMarker.on('drag', (evt) => {
  const address = evt.target.getLatLng();
  inputAddress.value = `${address.lat.toFixed(5)},${address.lng.toFixed(5)}`;
});

const createMarker = (advert) => {
  const groupLayer = L.layerGroup().addTo(map);
  const lat = advert.location.lat;
  const lng = advert.location.lng;

  const icon = L.icon({
    iconUrl: otherIcon.path,
    iconSize: otherIcon.size,
    iconAnchor: otherIcon.anchor,
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

const getMarkers = (adverts) => {
  adverts.forEach(createMarker);
};

export { getMarkers };

map.on('load', () => {
  const address = specialMarker.getLatLng();
  inputAddress.value = `${address.lat.toFixed(5)},${address.lng.toFixed(5)}`;
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
