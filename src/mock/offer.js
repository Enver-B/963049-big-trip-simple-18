import {OFFER_ID, OFFER_PRICE, OFFER_TITLE} from './const.js';
import {getRandomInteger} from '../utils';

export const generateOffer = () => ({
  id: OFFER_ID[getRandomInteger(0,OFFER_ID.length - 1)],
  title: OFFER_TITLE[getRandomInteger(0,OFFER_TITLE.length - 1)],
  price: OFFER_PRICE[getRandomInteger(0,OFFER_PRICE.length - 1)],
});

