import {generateOffer} from '../mock/offer.js';
import {generatePoint} from '../mock/point.js';

export default class PointModel {
  offersList = Array.from({length: 3}, generateOffer);
  points = Array.from({length: 3}, generatePoint);

  getOffers = () => this.offersList;
  getPoints = () => this.points;
}
