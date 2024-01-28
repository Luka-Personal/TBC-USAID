import View from "./View.js";
class FooterView extends View {
  _parentElement = document.getElementById("footerSection");
  constructor() {
    super();
  }
  _generateMarkup() {
    const markup = `
  <div class="center section-footer grid">
    <img class="tbc-logo" src="/src/img/footer-images/tbc-logo.webp" alt="" />
    <div class="social-logos">
      <a target="_blank" href="https://www.facebook.com/tbcbank/">
        <img src="/src/img/footer-images/fb-logo.webp" alt="fb-logo" />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCGk9R2LV2ywOL80r8Xc6xtQ"
        ><img src="/src/img/footer-images/yt-logo.webp" alt="yt-logo"
      /></a>
    </div>
    <div class="copyright-notice">
      <p class="footer-p">© 2023 ყველა უფლება დაცულია</p>
    </div>
    <div class="legal-text">
      <input type="checkbox" id="legal" class="legal-hidden" />
      <label for="legal" class="legal-open">
        <a class="footer-a legal-text" id="legal-text">წესები და პირობები</a>
      </label>
      <div class="overlay-laws">
        <div class="laws-sidebar">
          <article>
            <img
              class="laws-icon"
              src="/src/img/laws-images/close-icon.svg"
              alt="close icon" />
            <div class="article-content"></div>
            <button class="laws-sidebar__button">დახურვა</button>
          </article>
        </div>
      </div>
    </div>
    <button type="button" class="message-button">მოგვწერეთ</button>
  </div>  
    `;
    return markup;
  }
  addEventListeners() {
    document
      .querySelector(".overlay-laws")
      .addEventListener("click", this._lawsSidebarState.bind(this));
    document
      .querySelector(".legal-open")
      .addEventListener("click", this._loadLegalData.bind(this));
  }
  _lawsSidebarState(e) {
    if (
      !e.target.classList.contains("overlay-laws") &&
      !e.target.classList.contains("laws-icon") &&
      !e.target.classList.contains("laws-sidebar__button")
    )
      return;
    document.getElementById("legal").checked = false;
    document.querySelector(".article-content").innerHTML = "";
  }
  _loadLegalData() {
    const articleElement = document.querySelector(".article-content");
    this._data.forEach((law) => {
      const markup = `
          <h3>${law.title}</h3>
          ${law.description.map((desc) => `<p>${desc.paragraph}</p>`).join("")}
      `;
      articleElement.insertAdjacentHTML("afterbegin", markup);
    });
  }
}
export default new FooterView();
