// import Templater from '../../src/Templater.js';

export class ViewSort {
  constructor(contr) {
    this.controller = contr;
    // this.templater = new Templater('./components/filter/Filter.html');
    this.applyPriceFilterBtn = document.querySelector('#apply-price-filter');
    this.applyQtyFilterBtn = document.querySelector('#apply-qty-filter');
    this.removeFiltersBtn = document.querySelector('#remove-filters');
    this.handleEvents();
  }

  handleEvents() {
    const sortBtns = document.querySelectorAll('.sort-btn');
    [...sortBtns].forEach(btn => btn
      .addEventListener('click', this.getSortType.bind(this)));
  }

  getSortType(e) { // ????????????????
    e.preventDefault();

    const sortType = e.target.parentNode.id;
    this.controller.sortProducts(sortType);
  }

}