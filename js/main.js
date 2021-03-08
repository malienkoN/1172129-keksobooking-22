import {generateAdverts} from './data.module.js';
import {render} from'./render.module.js';

const data = generateAdverts();

// data.forEach(advert => {
//   render(advert);
// });

render(data[0]);

// console.log(data[0]);
