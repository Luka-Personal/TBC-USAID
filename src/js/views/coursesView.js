import View from "./View.js";

class CoursesView extends View {
  _parentElement = document.getElementById("courseCardsSection");
  _generateMarkup() {
    const markup = `${this._data
      .map((courseData) => {
        return `
       <div class="course">
        <img
         class="course-image"
         src="${courseData.photoURL}"
         alt="${courseData.title}"
         loading="lazy"
         />
        <div class="course-info">
         <h3 class="course-title">${courseData.title}</h3>
         <p class="course-status">${courseData.status}</p>
        </div>
        <a class="course-details" href="#"><img src="/src/img/svg-images/arrow-course-details.svg" alt="">კურსის დეტალები</a>
       </div>`;
      })
      .join("")}`;
    return markup;
  }
}
export default new CoursesView();
