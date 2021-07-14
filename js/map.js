import { renderCard } from './card.js';

const TokyoCenterCoord = {
  LAT: 35.6894,
  LNG: 139.692,
};

const MAIN_ICON = {
  PATH: './img/main-pin.svg',
  SIZE: [52, 52],
  ANCHOR: [26, 52],
};

const OTHER_ICON = {
  PATH: './img/pin.svg',
  SIZE: [40, 40],
  ANCHOR: [20, 40],
};

const inputAddress = document.querySelector('#address');

const renderInputAddress = (marker) => {
  const address = marker.getLatLng();
  inputAddress.value = `${address.lat.toFixed(5)}, ${address.lng.toFixed(5)}`;
};

const mainPinIcon = L.icon({
  iconUrl: MAIN_ICON.PATH,
  iconSize: MAIN_ICON.SIZE,
  iconAnchor: MAIN_ICON.ANCHOR,
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

const pinIcon = L.icon({
  iconUrl: OTHER_ICON.PATH,
  iconSize: OTHER_ICON.SIZE,
  iconAnchor: OTHER_ICON.ANCHOR,
});

const groupLayer = L.layerGroup();

const createMarker = (advert) => {
  groupLayer.addTo(map);

  const lat = advert.location.lat;
  const lng = advert.location.lng;

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: pinIcon,
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

const createMap = (callback) => map.on('load', () => {
  renderInputAddress(specialMarker);
  callback();
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

const clearMap = () => groupLayer.clearLayers();

export {
  showMarkers,
  setDefaultAddressCoordinates,
  setDefaultCoordinates,
  createMap,
  clearMap
};
