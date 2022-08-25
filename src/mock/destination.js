import {NAME_CITIES, DESCRIPTIONS, PICTURE_DESCRIPTIONS, ID} from './const.js';
import {getRandomInteger} from '../utils.js';

const generateCities = () => {
  const randomIndex = getRandomInteger(0, NAME_CITIES.length - 1);

  return NAME_CITIES[randomIndex];
};

const generateDescription = () => {
  const randomIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  return DESCRIPTIONS[randomIndex];
};

const generatePictureDescription = () => {
  const randomIndex = getRandomInteger(0, PICTURE_DESCRIPTIONS.length - 1);

  return PICTURE_DESCRIPTIONS[randomIndex];
};

export const generateDestination = () => ({
  id: getRandomInteger(ID),
  description: generateDescription(),
  name: generateCities(),
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: generatePictureDescription()
    }
  ]
});
