import { ViewSearch } from './ViewSearch.js';
import { ModelSearch } from './ModelSearch.js';

export class ControllerSearch {
  constructor(observer) {
    this.observer = observer;
    this.model = new ModelSearch();
    this.view = new ViewSearch();
    this.handleEvents();
  }

  handleEvents() {
    this.view.handleEvents(this.filterProducts.bind(this));
  }

  filterProducts() {
    const phrase = this.view.getSearchPhrase();
    const filteredProducts = this.model.filterProducts(phrase);
    this.observer.publish('RenderProducts', filteredProducts);
  }
}