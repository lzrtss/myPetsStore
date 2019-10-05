// import Templater from '../../src/Templater.js';

export class ViewFilter {
  constructor(contr) {
    this.controller = contr;
    // this.templater = new Templater('./components/filter/Filter.html');

    this.minPriceInput = document.querySelector('#min-price');
    this.maxPriceInput = document.querySelector('#max-price');
    this.minQtyInput = document.querySelector('#min-qty');
    this.maxQtyInput = document.querySelector('#max-qty');
    this.removeFiltersBtn = document.querySelector('#remove-filters');
    this.addFilters = document.querySelector('#add-filters-placeholder');
    this.handleEvents();
  }

  handleEvents() {
    this.minPriceInput
      .addEventListener('input', this.controller.filterByPrice.bind(this.controller));
    this.maxPriceInput
      .addEventListener('input', this.controller.filterByPrice.bind(this.controller));
    this.minQtyInput
      .addEventListener('input', this.controller.filterByQty.bind(this.controller));
    this.maxQtyInput
      .addEventListener('input', this.controller.filterByQty.bind(this.controller));

    this.removeFiltersBtn
      .addEventListener('click', this.controller.removeFilters.bind(this.controller));
    document.addEventListener('DOMContentLoaded', this.renderFilters.bind(this));
  }

  renderFilters() {
    // RENDER MAIN FILTERS!
  }

  renderAddFilter([output, category]) { // is it allowed (array as an argument)???
    this.addFilters.innerHTML = output;

    console.log('This is a', category); // REMOVE ME!!!

    const addFilterBtns = document.querySelectorAll(`.${category}-add-filter`);
    addFilterBtns.forEach(btn => console.log(btn.getAttribute('data-additional-filter')));

    [...addFilterBtns].forEach(btn => btn.addEventListener('change', () => this.controller.additionalFilterProducts(btn.getAttribute('data-additional-filter'))));
  }

  getMinMaxPrice() {
    const minMaxObj = {};
    minMaxObj.minPrice = document.querySelector('#min-price').value;
    minMaxObj.maxPrice = document.querySelector('#max-price').value;

    return minMaxObj;
  }

  getMinMaxQty() {
    const minMaxObj = {};
    minMaxObj.minQty = document.querySelector('#min-qty').value;
    minMaxObj.maxQty = document.querySelector('#max-qty').value;

    return minMaxObj;
  }

  sayToRemoveFilters() {
    this.controller.removeFilters();
  }
}