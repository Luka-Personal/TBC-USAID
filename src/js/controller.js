import * as model from "./model.js";
import headerView from "./views/headerView.js";
import programView from "./views/programView.js";
import coursesView from "./views/coursesView.js";
import carouselView from "./views/carouselView.js";
import accordionView from "./views/accordionView.js";
const controlHeader = function () {
  headerView.render();
  headerView.addEventListeners();
};
const controlProgramOverview = function () {
  programView.render(model.state.educationalProgramOverview);
};
const controlCourses = function () {
  coursesView.render(model.state.coursesDatabase);
};
const controlSlider = function () {
  carouselView.render(model.state.carouselImages);
  carouselView.initializeSlider();
};
const controlAccordion = function () {
  accordionView.render(model.state.accordionDatabase);
  accordionView.initializeAccordion();
};
const init = function () {
  controlHeader();
  controlProgramOverview();
  controlCourses();
  controlSlider();
  controlAccordion();
};
(() => init())();
