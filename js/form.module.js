const select = document.getElementById('type');
const price = document.getElementById('price');

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
  const roomNumber = Number(roomNumberSelect.value);// числовой формат из цифр, которые в были строкой
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
checkRoomNumber();

roomNumberSelect.addEventListener('change', checkRoomNumber);
