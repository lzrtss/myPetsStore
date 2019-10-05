// import Templater from '../../src/Templater.js';
import { additionalFiltersCats, additionalFiltersDogs, additionalFiltersFishes, additionalFiltersBirds } from './filter.js';

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
    // const category = this.controller.getCategory();
    // console.log(this);
    // showAddFilters(category);
  }

  renderAddFilter(category) {
    if (category === 'all') {
      this.addFilters.innerHTML = '';
    } else if (category === 'cat') {
      this.addFilters.innerHTML = additionalFiltersCats;
    } else if (category === 'dog') {
      this.addFilters.innerHTML = additionalFiltersDogs;
    } else if (category === 'fish') {
      this.addFilters.innerHTML = additionalFiltersFishes;
    } else if (category === 'bird') {
      this.addFilters.innerHTML = additionalFiltersBirds;
    }

    const addFilterBtns = document.querySelectorAll(`.${category}-add-filter`);

    // [...addFilterBtns].forEach(btn => {
    //   btn.addEventListener('changed', this.model.addFilterProducts.bind(this.model));
    // })
    // this.model.addFilterProducts(category);
  }

  getCategory() {
    // 1. get products from LS
    // 2. find product statusFilter prop of which doesn't have: 'category'
    // 3. return its product.type
  }

  showAddFilters(category) {
    // this.controller.chooseAddFilters(category)
    console.log('Rendering additional filters for', category); // DON'T FORGET TO REMOVE ME!
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


  sayToRemoveFilters() { // remove!!!
    this.controller.removeFilters();
  }
}