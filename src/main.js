import {render} from './render.js';
import FilterView from './view/filter-view.js';
import EventPresenter from './presenter/event-presenter.js';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.trip-controls');
//const siteHeaderMainElement = siteHeaderElement.querySelector('.trip-main');
const eventPresenter = new EventPresenter();

render(new FilterView(), siteHeaderElement);

eventPresenter.init(siteMainElement);
