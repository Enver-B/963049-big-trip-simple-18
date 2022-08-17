import NewEventAddBtnView from './view/new-event-add-btn-view.js';
import {render} from './render.js';
import FilterView from './view/filter-view.js';
import EventPresenter from './presenter/event-presenter.js';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.page-header');
const siteHeaderMainElement = siteHeaderElement.querySelector('.trip-main');
const eventPresenter = new EventPresenter();

render(new NewEventAddBtnView(), siteHeaderMainElement);
render(new FilterView(), siteHeaderElement);

eventPresenter.init(siteMainElement);
