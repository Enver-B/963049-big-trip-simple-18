import {generatePoint} from '../mock/point.js';
import {generateOffer} from '../mock/offer.js';
import {generateDestination} from '../mock/destination.js';

export default class PointModel {
  points = Array.from({length: 4}, generatePoint);
  offers = Array.from({length: 4}, generateOffer);
  //destinations = generateDestination;
  destinations = Array.from({length: 4}, generateDestination);

  getPoints = () => this.points;
  getOffers = () => this.offers;
  getDestinations = () => this.destinations;
}
