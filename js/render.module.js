const template = document.querySelector('#card');
const mapCanvas = document.querySelector('#map-canvas');

const translateType = {
  palace: 'Дворец',
  flat: 'Квартира ',
  house: 'Дом',
  bungalow: 'Бунгало ',
}


const render = (advert) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.popup__title').innerText = advert.offer.title;
  clone.querySelector('.popup__text--address').innerText = advert.offer.address;
  clone.querySelector('.popup__text--price__value').innerText = advert.offer.price;
  clone.querySelector('.popup__type').innerText = translateType[advert.offer.type];
  clone.querySelector('.popup__text--capacity').innerText = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  clone.querySelector('.popup__text--time').innerText = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;
  // features
  clone.querySelector('.popup__description').innerText = advert.offer.description;
  clone.querySelector('.popup__photos').innerHTML = advert.offer.photos.map(src => `<img class="popup__photo" width="45" height="40" src="${src}" alt="Фотография жилья">`).join();

  clone.querySelector('.popup__avatar').setAttribute('src', advert.author.avatar);

  mapCanvas.appendChild(clone);
}

export {render};
