import {getRandomInteger} from '../utils.js';
import {TRANSPORT_TYPES} from './const.js';
import {generateDestination} from './destination.js';
import {generateOffer} from './offer';

const generateTransportType = () => {
  const randomIndex = getRandomInteger(0, TRANSPORT_TYPES.length - 1);

  return TRANSPORT_TYPES[randomIndex];
};

const idCollection = [];
const generateOfferId = () => {
  const offersArray = Array.from({length: 5}, generateOffer);
  offersArray.forEach((item) => idCollection.push(item.id));
  return new Set(idCollection);
};

export const generatePoint = () => ({
  basePrice: getRandomInteger(1000, 5000),
  dateFrom: `2019-07-${getRandomInteger(10,30)}T22:55:56.845Z`,
  dateTo: `2019-07-${getRandomInteger(10,30)}T11:22:13.375Z`,
  destination: generateDestination(),
  id: '0',
  offers: generateOfferId() ,
  type: generateTransportType()
});


