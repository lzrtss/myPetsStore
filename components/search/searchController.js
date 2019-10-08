import { SearchView } from './searchView.js';
import { SearchModel } from './searchModel.js';

export class SearchController {
  constructor(observer) {
    this.observer = observer;
    this.model = new SearchModel();
    this.view = new SearchView();
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