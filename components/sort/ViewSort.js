// import Templater from '../../src/Templater.js';

export class ViewSort {
  constructor() {
    // this.templater = new Templater('./components/filter/Filter.html');
    this.removeFiltersBtn = document.querySelector('#remove-filters');
    this.sortBtns = document.querySelectorAll('.sort-btn');
  }

  handleEvents(sortProducts) {
    [...this.sortBtns].forEach(btn =>
      btn.addEventListener('click', (e) => sortProducts(btn.getAttribute('data-sort-type'), e)));
  }

}