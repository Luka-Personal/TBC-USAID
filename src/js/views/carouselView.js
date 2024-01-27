import View from "./View.js";
import { TOUCH_MOVE_THRESHOLD } from "../config.js";
import { SLIDER_AUTO_CHANGE_TIME } from "../config.js";

class CarouselView extends View {
  _parentElement = document.getElementById("sliderContent");
  _sliderWrapper = document.querySelector(".slider-wrapper");
  _dotNavigation = document.getElementById("dotNavigation");
  _nextButton = document.getElementById("nextSlide");
  _previousButton = document.getElementById("previousSlide");
  _nextPrevButtonContainer = document.getElementById("nextPreviousNavigation");
  _carouselSection = document.getElementById(`carouselSection`);
  constructor() {
    super();
    this._addEventListeners();
  }
  /**
   * Reference to the main slider element.
   * @type {HTMLElement}
   */
  _slider;
  /**
   * Collection of individual slide elements.
   * @type {NodeListOf<HTMLElement>}
   */
  _slides;
  /**
   * Total number of slides in the slider.
   * @type {number}
   */
  _sliderCount;
  /**
   * Collection of navigation dots corresponding to each slide.
   * @type {NodeListOf<HTMLElement>}
   */
  _dots;
  /**
   * Current index of the active slide.
   * @type {number}
   */
  _currentIndex = 0;
  /**
   * Horizontal start position for touch events.
   * @type {number}
   */
  _touchStartX = 0;
  /**
   * Identifier for the animation frame.
   * @type {number}
   */
  _animationFrameId;
  initializeSlider() {
    this._slider = document.getElementById("sliderContent");
    this._slides = this._slider.querySelectorAll("#slide ");
    this._sliderCount = this._slides.length;
    this._slides[0].classList.add("active");
    this._generateSliderDots();
    this._setupIntersectionObserver();
  }
  /**
   * Generates markup for carousel slides.
   * @returns {string} HTML markup for the carousel slides.
   */
  _generateMarkup() {
    const markup = this._data
      .map((carouselData) => {
        const images = carouselData.photoURLs
          .filter((url) => url !== undefined)
          .map(
            (url, index) => `
                  <img
                    src="${url}"
                    alt="slide ${index + 1}"
                  />`
          )
          .join("");

        return images.length > 0
          ? `
                <li class="slide-item" id="slide">
                  ${images}
                </li>`
          : "";
      })
      .join("");

    return markup;
  }
  /**
   * Sets up an Intersection Observer to handle slide animations.
   */
  _setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          this._animateSlides();
        }, 1000);
      } else if (!entries[0].isIntersecting) {
        setTimeout(() => {
          this._pauseAnimation();
        }, 2000);
      }
    });
    observer.observe(this._carouselSection);
  }
  /**
   * Adds event listeners to the slider wrapper.
   */
  _addEventListeners() {
    this._sliderWrapper.addEventListener(
      `click`,
      this._handleSliderWrapperClick.bind(this)
    );
    this._sliderWrapper.addEventListener(
      "mouseenter",
      this._pauseAnimation.bind(this)
    );
    this._sliderWrapper.addEventListener(
      "mouseleave",
      this._resumeAnimation.bind(this)
    );
    this._sliderWrapper.addEventListener(
      "touchstart",
      this._handleTouchStart.bind(this),
      { passive: true }
    );
    this._sliderWrapper.addEventListener(
      "touchmove",
      this._handleTouchMove.bind(this),
      { passive: true }
    );
  }
  /**
   * Handles the touchstart event.
   * @param {TouchEvent} e - The touch event object.
   */
  _handleTouchStart(e) {
    this._touchStartX = e.touches[0].clientX;
  }
  /**
   * Handles the touchmove event.
   * @param {TouchEvent} e - The touch event object.
   */
  _handleTouchMove(e) {
    if (!this._touchStartX) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - this._touchStartX;

    if (Math.abs(deltaX) >= TOUCH_MOVE_THRESHOLD) {
      if (deltaX > 0) {
        this._moveToSlide("previous");
      } else {
        this._moveToSlide("next");
      }

      this._touchStartX = null;
    }
  }
  /**
   * Handles click events on the slider wrapper using event delegation.
   * @param {MouseEvent} e - The mouse event object.
   * @returns {void}
   */
  _handleSliderWrapperClick(e) {
    const clickedElement =
      e.target.closest("button") || e.target.closest("#dotNavigation > li");
    if (!clickedElement) return;
    switch (clickedElement.dataset.action) {
      case "goLeft":
        this._moveToSlide("previous");
        break;
      case "goRight":
        this._moveToSlide("next");
        break;
      case "dots":
        const dotsArray = Array.from(this._dots);
        this._updateActiveSlideAndDots(dotsArray.indexOf(clickedElement));
        break;
    }
  }
  /**
   * Generates slider dots for navigation.
   */
  _generateSliderDots() {
    this._slides.forEach(() => {
      this._dotNavigation.innerHTML += "<li data-action='dots'></li>";
    });
    this._dots = document.querySelectorAll("#dotNavigation li");
    this._dots[0].classList.add("active");
  }
  /**
   * Animates the slides, auto-advancing to the next slide based on a time interval.
   */
  _animateSlides() {
    cancelAnimationFrame(this._animationFrameId);
    let lastTime = performance.now();
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      if (deltaTime >= SLIDER_AUTO_CHANGE_TIME) {
        this._moveToSlide("next");
        lastTime = currentTime;
      }

      this._animationFrameId = requestAnimationFrame(animate);
    };

    this._animationFrameId = requestAnimationFrame(animate);
  }
  _pauseAnimation() {
    cancelAnimationFrame(this._animationFrameId);
  }
  _resumeAnimation() {
    this._animateSlides();
  }
  /**
   * Moves to the next or previous slide based on the specified direction.
   * @param {string} direction - The direction of the slide movement ("previous" or "next").
   */
  _moveToSlide(direction) {
    this._currentIndex = this._getActiveSlideIndex();

    const slideDirectionMultiplier = direction === "previous" ? -1 : 1;
    this.activeIndex =
      (this._currentIndex + slideDirectionMultiplier + this._sliderCount) %
      this._sliderCount;

    this._updateActiveSlideAndDots(this.activeIndex);
  }
  /**
   * Gets the index of the currently active slide.
   *
   * @returns {number} The index of the active slide.
   */
  _getActiveSlideIndex = () => {
    return Array.from(this._slides).findIndex((li) =>
      li.classList.contains("active")
    );
  };
  /**
   * Sets the active slide index and updates the corresponding slider and dots.
   *
   * @param {number} activeSliderIndex - The index of the slide to set as active.
   */
  _updateActiveSlideAndDots = (activeSliderIndex) => {
    this._removeActiveClassFromSlide();
    this._addActiveClassToSlide(activeSliderIndex);
    this._removeActiveClassFromDot();
    this._addActiveClassToDot(activeSliderIndex);
  };
  _removeActiveClassFromSlide() {
    this._slider.querySelector("li.active").classList.remove("active");
  }
  _addActiveClassToSlide(activeSliderIndex) {
    this._slides[activeSliderIndex].classList.add("active");
  }
  _removeActiveClassFromDot() {
    this._dotNavigation.querySelector("li.active").classList.remove("active");
  }
  _addActiveClassToDot(activeSliderIndex) {
    this._dots[activeSliderIndex].classList.add("active");
  }
}
export default new CarouselView();
