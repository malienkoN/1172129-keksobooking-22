function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max));
}

function addingZero(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

function getRandomElement(array) {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
}

function shuffle() {
  return Math.random() - 0.5;
}

function getRandomSlice(array) {
  return array.sort(shuffle).slice(0, getRandomInt(0, array.length));
}

export {getRandomFloat, getRandomInt, addingZero, getRandomElement, getRandomSlice};
