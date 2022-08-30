import {generateOffer} from '../mock/offer.js';
import {generatePoint} from '../mock/point.js';

export default class PointModel {
  offersList = Array.from({length: 4}, generateOffer);
  points = Array.from({length: 4}, generatePoint);

  getOffers = () => this.offersList;
  getPoints = () => this.points;
}
