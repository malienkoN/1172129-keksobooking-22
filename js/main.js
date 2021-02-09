function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max));
}

function zero(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

function getRandomElement(array) {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getRandomSlice(array) {
  [array].sort(shuffle(array)).slice(0, getRandomElement(array));
  return array;
}



function createAdvert() {
  const location = {
    x: getRandomFloat(35.65000, 35.70000).toFixed(5),
    y: getRandomFloat(139.70000, 139.80000).toFixed(5),
  }

  return {
    author: {
      avatar: `img/avatars/user${zero(getRandomInt(1, 8))}.png`,
    },

    location: {
      x: location.x,
      y: location.y,
    },

    offer: {
      title: 'Заголовок',
      address: `${location.x}, ${location.y}`,
      price: getRandomInt(5000, 20000),
      type: getRandomElement(['palace', 'flat', 'house', 'bungalow']),
      rooms: getRandomInt(1, 30),
      guests: getRandomInt(75, 93),
      checkin: getRandomElement(['12:00', '13:00', '14:00']),
      checkout: getRandomElement(['12:00', '13:00', '14:00']),
      features: getRandomSlice(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']),
      description: 'Светлое и просторное помещение',
      photos: getRandomSlice(['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']),
    },
  }
}

function generateAdverts() {
  const adverts = [];

  for (let i = 0; i < 10; i++) {
    const advert = createAdvert();
    adverts.push(advert);
  }

  return adverts;
}

const resultAdverts = generateAdverts();

console.log(resultAdverts);


/* В объекте offer не сделаны поля: feature & photos  */
