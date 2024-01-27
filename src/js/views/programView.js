import View from "./View.js";
class ProgramView extends View {
  _parentElement = document.getElementById("programOverviewSection");
  _generateMarkup() {
    const markup = `
    <div class="center section-program">
     <div class="program-overview__content">
      <p class="program-overview__p">
        ${this._data.programTitle}${this._data.programDescription}
      </p>
      <a class="program-overview__a" href="https://www.tbcacademy.ge/usaid-about">${this._data.programDetails}</a>
    </div>
   </div>
    `;
    return markup;
  }
}
export default new ProgramView();
