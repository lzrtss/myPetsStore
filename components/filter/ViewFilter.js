// import Templater from '../../src/Templater.js';

export class ViewFilter {
  constructor() {
    // this.templater = new Templater('./components/filter/Filter.html');
    this.minPriceInput = document.querySelector('#min-price');
    this.maxPriceInput = document.querySelector('#max-price');
    this.minQtyInput = document.querySelector('#min-qty');
    this.maxQtyInput = document.querySelector('#max-qty');
    this.removeFiltersBtn = document.querySelector('#remove-filters');
  }

  handleEvents(filterByPrice, filterByQty, removeFilters) {
    this.minPriceInput
      .addEventListener('input', filterByPrice);
    this.maxPriceInput
      .addEventListener('input', filterByPrice);
    this.minQtyInput
      .addEventListener('input', filterByQty);
    this.maxQtyInput
      .addEventListener('input', filterByQty);
    this.removeFiltersBtn
      .addEventListener('click', removeFilters);

    document.addEventListener('DOMContentLoaded', this.renderFilters.bind(this)); // REMOVE IF I DON'T NEED THAT
  }

  renderFilters() {
    // RENDER MAIN FILTERS USING TEMPLATER!
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

}