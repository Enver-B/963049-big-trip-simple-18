import {createElement} from '../render.js';

const createEventsTemplate = () => '<div class="page-body__container"></div>';

export default class EventsContainerView {
  getTemplate() {
    return createEventsTemplate();
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
