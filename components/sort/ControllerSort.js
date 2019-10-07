import { ViewSort } from './ViewSort.js';
import { ModelSort } from './ModelSort.js';

export class ControllerSort {
  constructor(observer) {
    this.observer = observer;
    this.model = new ModelSort();
    this.view = new ViewSort();
    this.handleEvents();
  }

  handleEvents() {
    this.view.handleEvents(this.sortProducts.bind(this));
  }

  sortProducts(sortType, e) {
    e.preventDefault();

    const sortedProducts = this.model.sortProducts(sortType);

    this.observer.publish('RenderProducts', sortedProducts);
  }
}