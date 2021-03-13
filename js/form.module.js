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
