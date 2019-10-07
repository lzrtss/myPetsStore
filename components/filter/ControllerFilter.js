import { ViewFilter } from './ViewFilter.js';
import { ModelFilter } from './ModelFilter.js';

export class ControllerFilter {
  constructor(observer) {
    this.observer = observer;
    this.model = new ModelFilter();
    this.view = new ViewFilter();
    this.handleEvents();
  }

  handleEvents() {
    this.view.handleEvents(
      this.filterByPrice.bind(this),
      this.filterByQty.bind(this),
      this.removeFilters.bind(this)
    );
  }

  filterByPrice() {
    const minMaxObj = this.view.getMinMaxPrice();
    const filteredProducts = this.model.filterByPrice(minMaxObj.minPrice, minMaxObj.maxPrice);
    this.observer.publish('RenderProducts', filteredProducts);
  }

  filterByQty() {
    const minMaxObj = this.view.getMinMaxQty();
    const filteredProducts = this.model.filterByQty(minMaxObj.minQty, minMaxObj.maxQty);
    this.observer.publish('RenderProducts', filteredProducts);
  }

  removeFilters() {
    const allProducts = this.model.getAllProducts();
    this.observer.publish('RenderProducts', allProducts);
  }
}