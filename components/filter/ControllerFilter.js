import { ViewFilter } from './ViewFilter.js';
import { ModelFilter } from './ModelFilter.js';

export class ControllerFilter {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelFilter(this);
    this.view = new ViewFilter(this);
    this.observer.subscribe('Category was chosen', this.chooseAddFilters.bind(this));
  }

  // chooseFilters(category) {
  //   // some logic that helps to define additional folters depending on category and send them for rendering
  //   this.model.chooseFilters(category);
  // }

  // showAddFilters(category) {
  //   // some logic that helps to define additional folters depending on category and send them for rendering
  //   this.model.chooseFilters(category);
  // }

  // sendFiltersToRender(category) {
  //   this.view.renderFilters(category);
  // }

  chooseAddFilters(category) {
    this.model.chooseAddFilters(category);
    this.renderAddFilter(category); // ???
  }

  filterByPrice() {
    const minMaxObj = this.view.getMinMaxPrice();
    const filteredProducts = this.model.filterByPrice(minMaxObj.minPrice, minMaxObj.maxPrice);
    this.observer.publish('Products are ready for render', filteredProducts);
  }

  filterByQty() {
    const minMaxObj = this.view.getMinMaxQty();
    const filteredProducts = this.model.filterByQty(minMaxObj.minQty, minMaxObj.maxQty);
    this.observer.publish('Products are ready for render', filteredProducts);
  }

  removeFilters() {
    const allProducts = this.model.getAllProducts();
    this.observer.publish('Products are ready for render', allProducts);
  }

  renderAddFilter(category) {
    this.view.renderAddFilter(category); // ???
  }

}