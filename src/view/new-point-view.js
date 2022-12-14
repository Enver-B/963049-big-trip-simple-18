import {createElement} from '../render.js';
import {humanizeTaskDueDate} from '../utils.js';

const createEventTemplate = (point, offer) => {
  const {basePrice, dateFrom, dateTo, destination, type} = point;
  const {title, price} = offer;

  const eventDate = dateFrom
    ? humanizeTaskDueDate(dateFrom)
    : '';

  const endTime = dateTo
    ? humanizeTaskDueDate(dateTo)
    : '';

  const startTime = dateFrom
    ? humanizeTaskDueDate(dateFrom)
    : '';

  return (
    `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${eventDate}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T10:30">${startTime}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T11:00">${endTime}</time>
                  </p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  <li class="event__offer">
                    <span class="event__offer-title">${title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </li>
                </ul>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`
  );
};


export default class EventView {
  constructor(point, offer){
    this.point = point;
    this.offer = offer;
  }

  getTemplate() {
    return createEventTemplate(this.point, this.offer);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
