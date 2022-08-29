import {getRandomElement} from '../utils.js';
import {TRANSPORT_DATA_TYPES} from './const.js';
import {offers} from './offer.js';

export const generateLocalPoint = () => ({
  basePrice: 222,
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: [0],
  offers: getRandomElement(offers),
  type: getRandomElement(TRANSPORT_DATA_TYPES)
});
