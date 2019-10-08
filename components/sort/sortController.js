import { SortView } from './sortView.js';
import { SortModel } from './sortModel.js';

export class SortController {
  constructor(observer) {
    this.observer = observer;
    this.model = new SortModel();
    this.view = new SortView();
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