import {createPopup} from './render.module.js';
import {nodeToString} from './util.module.js';
import {getAdverts} from './data.module.js';
import {filterAds} from './filter.module.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

adForm.classList.add('add-form--disabled');
mapFilters.classList.add('map__filters--disabled');

document.querySelectorAll('.--disabled').forEach( (disabled) => {
  disabled.setAttribute('disabled', 'disabled');
});

const address = document.getElementById('address');
const defaultAddressObject = {
  lat: 35.68407,
  lng: 139.75708,
}


const map = L.map('map')
  .on('load', () => {
    adForm.classList.remove('add-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');

    document.querySelectorAll('.--disabled').forEach( (disabled) => {
      disabled.removeAttribute('disabled');
    });

    address.setAttribute('readonly', 'readonly');
    address.value = `${defaultAddressObject.lat}, ${defaultAddressObject.lng}`;
  })
  .setView(defaultAddressObject, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const clearMap = () => {
  address.value = `${defaultAddressObject.lat}, ${defaultAddressObject.lng}`;
}

const marker = L.marker(
  {
    lat: 35.68407,
    lng: 139.75708,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const allMarkers = [];

const clearAllMarkers = () => {
  allMarkers.forEach(marker => {
    marker.remove();
  })
  allMarkers.length = 0;
}

getAdverts(points => {
  filterAds(points, adverts => {
    clearAllMarkers();
    adverts.forEach( point => {

      const icon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker(
        {
          lat:point.location.lat,
          lng:point.location.lng,
        },
        {
          icon,
        },
      );

      allMarkers.push(marker);
      marker.addTo(map);
      marker.bindPopup(nodeToString(createPopup(point)));
    });
  });
});

marker.on('moveend', (evt) => {
  const addressObject = evt.target.getLatLng();
  address.value = `${addressObject.lat.toFixed(5)}, ${addressObject.lng.toFixed(5)}`;
});

export {clearMap};
