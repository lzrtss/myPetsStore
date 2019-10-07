// import Templater from '../../src/Templater.js';

export class ViewSearch {
  constructor(observer) {
    this.observer = observer;
    // this.templater = new Templater('./components/search/Search.html');
    this.searchBar = document.querySelector('#searchbar-placeholder'); // remove if don't use!
    // document.addEventListener('DOMContentLoaded', this.renderSearchBar);  // remove if don't use!
    this.searchInput = document.querySelector('#search-input');
    // this.renderSearchBar(); // remove if don't use!
  }

  handleEvents(filterProducts) {
    this.searchInput.addEventListener('input', filterProducts);
  }

  // renderSearchBar() { // useless now
  //   this.templater.load(null, document.querySelector('#search-bar'));
  //   this.searchBtn = document.querySelector('#search-btn');
  //   this.searchBtn.addEventListener('click', this.getValue.bind(this));
  // }

  // renderSearchBar() {  // remove if don't use!
  //   this.searchBar.innerHTML = `
  //   <nav class="navbar navbar-expand-md mt-2 mb-4" id="search-bar">
  //   <div class="container">
  //     <form class="form-inline my-2 my-lg-0 justify-content-center w-100">
  //       <input id="search-input" class="form-control mr-sm-2 w-75" type="search" aria-label="Search">
  //       <button id="search-btn" class="btn btn-outline-dark my-2 my-sm-0"><i class="fas fa-search "></i></button>
  //     </form>
  //   </div>
  // </nav>
  //   `;
  // }

  getSearchPhrase() {
    return document.querySelector('#search-input').value;
  }
}