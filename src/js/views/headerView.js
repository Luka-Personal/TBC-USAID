import View from "./View.js";
import { HEADER_SCROLL_THRESHOLD } from "../config.js";
class HeaderView extends View {
  _parentElement = document.getElementById("headerNav");
  _body = document.querySelector("body");
  _main = document.querySelector("main");
  _prevScrollpos = window.scrollY;

  constructor() {
    super();
  }
  _generateMarkup() {
    const markup = `
    <nav>
    <input type="checkbox" id="nav" class="hidden-mobile__nav" />
    <label for="nav" class="nav-open" aria-controls="navigation">
      <i class="outer-line"></i>
      <i class="middle-line"></i>
      <i class="outer-line right-line"></i>
    </label>
    <img src="src/img/header-images/tbc.svg" alt="tbc-logo" />
    <div class="nav-overlay">
      <div class="nav-container">
        <ul role="menu">
          <li class="nav-item" role="menuitem"><a href="#" class="nav-link">მთავარი</a></li>
          <li class="nav-item" role="menuitem"><a href="#" class="nav-link">TBC IT</a></li>
          <li class="nav-item" role="menuitem">
            <a class="nav-link active-link" href="#">TBC x USAID</a>
          </li>
          <li class="nav-item" role="menuitem"><a class="nav-link" href="#">რისკები</a></li>
        </ul>
      </div>
    </div>
  </nav>
    `;
    return markup;
  }
  addEventListeners() {
    const _openedNav = document.querySelector(".nav-open");
    const _navOverlay = document.querySelector(".nav-overlay");

    _openedNav.addEventListener(
      "click",
      this._controlDekstopMobileNav.bind(this)
    );
    _navOverlay.addEventListener(
      "click",
      this._controlDekstopMobileNavBG.bind(this)
    );
    window.addEventListener("scroll", this._throttledHandleScroll.bind(this), {
      passive: true,
    });
  }
  /**
   * Controls the behavior of the desktop/mobile navigation when triggered.
   * - Toggles the "body-nav__state" class on the body element.
   * - Records the scroll position before modal activation to restore it later.
   * @private
   */
  _controlDekstopMobileNav() {
    this.scrollPositionBeforeModal = window.scrollY;
    this._body.classList.toggle("body-nav__state");
    window.scrollTo(0, this.scrollPositionBeforeModal);
  }
  /**
   * Controls the behavior of the desktop/mobile navigation background when clicked.
   * - If the click target has the "nav-overlay" class, closes the navigation by unchecking the checkbox with id "nav".
   * - Removes the "body-nav__state" class from the body element.
   * @param {Event} e - The click event.
   * @private
   */
  _controlDekstopMobileNavBG(e) {
    if (e.target.classList.contains("nav-overlay")) {
      document.getElementById("nav").checked = false;
      this._body.classList.remove("body-nav__state");
    }
  }
  /**
   * Throttled handler for the scroll event. Ensures that `_handleScroll` is called
   * only once per animation frame to optimize performance.
   *
   * @private
   * @memberof YourClassName
   * @method _throttledHandleScroll
   * @returns {void}
   */
  _throttledHandleScroll() {
    if (!this._animationFrameId) {
      this._animationFrameId = requestAnimationFrame(() => {
        this._handleScroll();
        this._animationFrameId = null;
      });
    }
  }
  /**
   * Handles the scroll event to control the visibility of header and navigation elements.
   * The method compares the current scroll position with the previous position
   * and adjusts the styling of the header and navigation accordingly.
   *
   * @private
   * @function
   * @memberof YourClass
   * @_handleScroll
   *
   * @returns {void}
   */
  _handleScroll() {
    document.querySelector("header").style.backgroundColor =
      "rgba(34, 34, 34, 0.9)";
    let currentScrollPos = window.scrollY;
    if (
      currentScrollPos > this._prevScrollpos &&
      currentScrollPos > HEADER_SCROLL_THRESHOLD &&
      !(window.innerWidth > 669)
    ) {
      document.querySelector("header").style.top = "-8.4rem";

      document.querySelector("nav").style.display = "none";
    } else {
      document.querySelector("header").style.top = "0";
      document.querySelector("nav").style.display = "flex";
    }
    this._prevScrollpos = currentScrollPos;
  }
}
export default new HeaderView();
