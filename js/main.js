import {generateAdverts} from'./data.js';
import {render} from'./render.module.js';

const data = generateAdverts();

// data.forEach(advert => {
//   render(advert);
// });

render(data[0]);

console.log(data[0]);

// const ololo1 = function () {
//
// }
//
// function ololo2 () {
//
// }
//
// const ololo3 = (a) => {
//   return a * 2;
// }
//
// const ololo4 = a => {
//   return a * 2;
// }
//
// const ololo5 = a => a * 2;
