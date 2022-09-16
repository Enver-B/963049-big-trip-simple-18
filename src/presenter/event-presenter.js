import EventEditFormView from '../view/new-edit-form-view.js';
//import EventAddFormView from '../view/new-add-form-view';
import EventView from '../view/new-point-view.js';
import EventsContainerView from '../view/events-container-view.js';
import EventsListView from '../view/events-list-view.js';
//import NewEventAddBtnView from '../view/new-event-add-btn-view.js';
import SortView from '../view/sort-view.js';
import {render} from '../render.js';
import {getRandomElement} from '../utils';

export default class EventPresenter {
  eventComponent = new EventsContainerView();
  eventListComponent = new EventsListView();

  init = (eventContainer, pointModel) => {
    this.eventContainer = eventContainer;
    this.pointModel = pointModel;
    this.points = [...this.pointModel.getPoints()];
    this.offers = [...this.pointModel.getOffers()];
    this.destinations = [...this.pointModel.getDestinations()];

    const pointForEdit = getRandomElement(this.points);
    const offerForEdit = getRandomElement(this.offers);
    const destinationsForEdit = getRandomElement(this.destinations);
    render(this.eventComponent, this.eventContainer);
    render(new SortView(), this.eventComponent.getElement());
    render(this.eventListComponent, this.eventComponent.getElement());
    render(new EventEditFormView(pointForEdit, offerForEdit, destinationsForEdit),
      this.eventListComponent.getElement());

    for (let i = 1; i < this.points.length; i++) {
      for (let j = 0; j < this.offers.length; j++) {
        const destination = this.destinations.find((item) => item.id === this.points[i].destination);

        const selectedOffers = this.offers.filter((item) => item.type === this.points[i].type);

        this.points[i].offers = selectedOffers;

        render(new EventView(this.points[i], destination, selectedOffers), this.eventListComponent.getElement());
      }
    }
  };
}
