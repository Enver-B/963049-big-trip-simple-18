import {ID, OFFER_PRICE, OFFER_TITLE} from './const.js';
import {getRandomInteger} from '../utils';

const generateOfferPrice = () => {
  const randomIndex = getRandomInteger(0, OFFER_PRICE.length - 1);

  return OFFER_PRICE[randomIndex];
};

const generateOfferTitle = () => {
  const randomIndex = getRandomInteger(0, OFFER_TITLE.length - 1);

  return OFFER_TITLE[randomIndex];
};

export const generateOffer = () => ({
  id: getRandomInteger(ID),
  title: generateOfferTitle(),
  price: generateOfferPrice()
});
