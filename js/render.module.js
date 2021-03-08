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

  // title
  const popupTitle = clone.querySelector('.popup__title');
  if (advert.offer.title) {
    popupTitle.innerText = advert.offer.title;
  } else {
    popupTitle.style.display = 'none';
  }

  // address
  const popupAddress = clone.querySelector('.popup__text--address');
  if (advert.offer.address) {
    popupAddress.innerText = advert.offer.address;
  } else {
    popupAddress.style.display = 'none';
  }

  // price
  const popupPrice = clone.querySelector('.popup__text--price__value');
  if (advert.offer.price) {
    popupPrice.innerText = advert.offer.price;
  } else {
    popupPrice.style.display = 'none';
  }

  // type
  const popupType = clone.querySelector('.popup__type');
  if (advert.offer.type) {
    popupType.innerText = translateType[advert.offer.type];
  } else {
    popupType.style.display = 'none';
  }

  // capacity
  const popupCapacity = clone.querySelector('.popup__text--capacity');
  if (advert.offer.rooms && advert.offer.guests) {
    popupCapacity.innerText = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  } else {
    popupCapacity.style.display = 'none';
  }

  // time
  const popupTime = clone.querySelector('.popup__text--time');
  if (advert.offer.checkin && advert.offer.checkout) {
    popupTime.innerText = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;
  } else {
    popupTime.style.display = 'none';
  }

  // features
  clone.querySelectorAll('.popup__feature').forEach( feature =>{
    feature.style.display = 'none';
  });

  advert.offer.features.forEach( feature =>{
    clone.querySelector(`.popup__feature--${feature}`).style.display = 'block';
  });

  // description
  const popupDescription = clone.querySelector('.popup__description');
  if (advert.offer.description) {
    popupDescription.innerText = advert.offer.description;
  } else {
    popupDescription.style.display = 'none';
  }

  // photos
  const popupPhotos = clone.querySelector('.popup__photos');
  if (advert.offer.photos) {
    popupPhotos.innerHTML = advert.offer.photos.map(src => `<img class="popup__photo" width="45" height="40" src="${src}" alt="Фотография жилья">`).join();
  } else {
    popupPhotos.style.display = 'none';
  }

  // avatar
  const popupAvatar = clone.querySelector('.popup__avatar');
  if (advert.author.avatar) {
    popupAvatar.setAttribute('src', advert.author.avatar);
  } else {
    popupAvatar.style.display = 'none';
  }

  mapCanvas.appendChild(clone);
}

export {render};
