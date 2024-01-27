export default class View {
  _data;

  _clear() {
    this._parentElement.innerHTML = ``;
  }
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
