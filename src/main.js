import {render} from './render.js';
import FilterView from './view/filter-view.js';
import EventPresenter from './presenter/event-presenter.js';
import NewEventAddBtnView from './view/new-event-add-btn-view.js';
import PointModel from './model/model.js';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.trip-controls');
const siteHeaderMainElement = document.querySelector('.trip-main');

const pointModel = new PointModel();
const eventPresenter = new EventPresenter();


render(new FilterView(), siteHeaderElement);
render(new NewEventAddBtnView(), siteHeaderMainElement);

eventPresenter.init(siteMainElement, pointModel);
