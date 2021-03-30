import {clearMap} from './map.module.js';
import {resetFilter} from './filter.module.js';

const select = document.getElementById('type');
const price = document.getElementById('price');
const title = document.querySelector('#title');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const description = document.querySelector('#description');

select.addEventListener('change', () => {
  if (select.value === 'bungalow') {
    price.placeholder = '0';
    price.setAttribute('min', '0');
  }

  if (select.value === 'flat') {
    price.placeholder = '1000';
    price.setAttribute('min', '1000');
  }

  if (select.value === 'house') {
    price.placeholder = '5000';
    price.setAttribute('min', '5000');
  }

  if (select.value === 'palace') {
    price.placeholder = '10000';
    price.setAttribute('min', '10000');
  }
});

price.addEventListener('invalid', () => {

  const validity = (() => {
    switch (select.value) {
      case 'flat': return price.value < 1000 ? 'Минимальная стоимость квартиры не менее 1000': '';
      case 'palace': return price.value < 10000 ? 'Дворец дешевле 10000? Вы уверены что это дворец?': '';
      case 'house': return price.value < 5000 ? 'Обычно дома начинаются от 5000': '';
      case 'bungalow': return price.value < 0 ? 'Вы за это ещё доплачиваете?': '';
    }
  })();

  price.setCustomValidity(validity);
})

const checkIn = document.getElementById('timein');
const checkOut = document.getElementById('timeout');

checkIn.addEventListener('change', () => {
  checkOut.value = checkIn.value;
});

checkOut.addEventListener('change', () => {
  checkIn.value = checkOut.value;
});


const roomNumberSelect = document.querySelector('#room_number');

const capacitySelect = document.querySelector('#capacity');
const capacitySelectChildren = capacitySelect.children;

const checkRoomNumber = () => {
  const roomNumber = Number(roomNumberSelect.value);
  for (let capacitySelectChild of capacitySelectChildren) {
    capacitySelectChild.setAttribute('disabled', '');
    capacitySelectChild.removeAttribute('selected');
  }
  if (roomNumber === 100) {
    capacitySelect.querySelector('[value="0"]').removeAttribute('disabled');
  } else {
    for (let capacitySelectChild of capacitySelectChildren) {
      if (Number(capacitySelectChild.value) > 0 && Number(capacitySelectChild.value) <= roomNumber) {
        capacitySelectChild.removeAttribute('disabled');
      }
    }
  }
  capacitySelect.value = capacitySelect.querySelector('option:not(:disabled)').value;
}


const form = document.querySelector('.ad-form');

form.addEventListener('reset', (evt) => {
  evt.preventDefault();

  clearMap();
  clearForm();
  resetFilter();
});

const clearForm = () => {
  price.value = '';
  title.value = '';
  select.value = 'flat';
  checkIn.value = '12:00';
  checkOut.value = '12:00';
  roomNumber.value = '1';
  capacity.value = '1';
  description.value = '';
  document.querySelectorAll('.features input').forEach( (feature) => {
    feature.checked = false;
  });
}


checkRoomNumber();

roomNumberSelect.addEventListener('change', checkRoomNumber);
