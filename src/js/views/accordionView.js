import View from "./View.js";
class AccordionView extends View {
  _parentElement = document.getElementById("accordionOpenData");
  _currentlyOpenAccordion = null;
  _accordionOpenContents;
  _accordionContainer;
  constructor() {
    super();
  }
  _generateMarkup() {
    const markup = `${this._data
      .map((accordion, i) => {
        return `
        <div class="accordion-item">
        <button class="accordion-button button-${i}" data-dd="${i}" aria-expanded="false">
          <span class="accordion-title">${accordion.question}</span>
          <span class="accordion-icon"></span>
        </button>
        <div class="accordion-content"></div>
      </div>`;
      })
      .join("")}`;
    return markup;
  }
  initializeAccordion() {
    this._accordionOpenContents =
      document.querySelectorAll(".accordion-content");
    this._accordionContainer = document.getElementById("accordionOpenData");
    this._addEventListeners();
  }
  _addEventListeners() {
    this._accordionContainer.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button) return;
      const id = +button.dataset.dd;
      this.handleAccordionToggle(
        button,
        this._accordionOpenContents[id],
        this._data[id].stages,
        this._data[id].answer,
        this._data[id].intro
      );
    });
  }
  /**
   * Handles the accordion toggle when a button is clicked.
   * @param {HTMLElement} button - The clicked accordion button.
   * @param {HTMLElement} content - The content container of the accordion.
   * @param {Array} stages - The stages data.
   * @param {string} answer - The answer data.
   * @param {Array} intro - The intro data.
   */
  handleAccordionToggle(button, contnent, stages, answer, intro) {
    if (
      this._currentlyOpenAccordion &&
      this._currentlyOpenAccordion !== contnent.parentElement
    ) {
      const previouslyOpenButton =
        this._currentlyOpenAccordion.querySelector("button");
      previouslyOpenButton.setAttribute("aria-expanded", "false");
      previouslyOpenButton.addEventListener(
        "transitionend",
        this.handleOtherTransitionEnd
      );
    }
    const itemToggle = button.getAttribute("aria-expanded");
    button.setAttribute(
      "aria-expanded",
      itemToggle === "false" ? "true" : "false"
    );
    this._currentlyOpenAccordion =
      itemToggle === "false" ? contnent.parentElement : null;

    if (itemToggle === "false" && !contnent.hasChildNodes()) {
      contnent.insertAdjacentHTML(
        "beforeend",
        this.generateContentHTML(intro, "accordion-intro") +
          this.generateContentHTML(stages, "accordion-stages") +
          this.generateContentHTML([answer], "accordion-answer")
      );
    } else if (itemToggle === "true") {
      contnent.addEventListener("transitionend", () => {
        contnent.removeEventListener(
          "transitionend",
          () => (contnent.innerHTML = "")
        );
      });
    }
  }
  /**
   * Generates HTML open accordion content based on data array and class name.
   * @param {Array} dataArray - The data array.
   * @param {string} className - The class name.
   * @returns {string} HTML content.
   */
  generateContentHTML(dataArray, className) {
    return dataArray
      ? dataArray.map((data) => `<p class="${className}">${data}</p>`).join("")
      : "";
  }
  handleOtherTransitionEnd() {
    const otherContent =
      this._currentlyOpenAccordion.querySelector(".accordion-content");
    previouslyOpenButton.removeEventListener(
      "transitionend",
      handleOtherTransitionEnd
    );
    otherContent.innerHTML = "";
  }
}
export default new AccordionView();
