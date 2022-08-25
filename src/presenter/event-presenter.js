import EventEditFormView from '../view/new-edit-form-view.js';
import EventView from '../view/new-point-view.js';
import EventsContainerView from '../view/events-container-view.js';
import EventsListView from '../view/events-list-view.js';
//import NewEventAddBtnView from '../view/new-event-add-btn-view.js';
import SortView from '../view/sort-view.js';

import {render} from '../render.js';

export default class EventPresenter {
  eventComponent = new EventsContainerView();
  eventListComponent = new EventsListView();

  init = (eventContainer, pointModel) => {
    this.eventContainer = eventContainer;
    this.pointModel = pointModel;
    this.containerPoint = [...this.pointModel.getPoints()];
    this.containerPoint = [...this.pointModel.getOffers()];

    render(this.eventComponent, this.eventContainer);
    render(new SortView(), this.eventComponent.getElement());
    render(this.eventListComponent, this.eventComponent.getElement());
    render(new EventEditFormView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }
    for (let i = 0; i < this.containerPoint.length; i++) {
      render(new EventView(this.containerPoint[i]),
        this.eventListComponent.getElement());
    }
  };
}
