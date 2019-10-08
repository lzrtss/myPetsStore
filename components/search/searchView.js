export class SearchView {
  constructor(observer) {
    this.observer = observer;
    this.searchInput = document.querySelector('#search-input');
  }

  handleEvents(filterProducts) {
    this.searchInput.addEventListener('input', filterProducts);
  }

  getSearchPhrase() {
    return document.querySelector('#search-input').value;
  }
}