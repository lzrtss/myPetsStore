import { ViewSearch } from './ViewSearch.js';
import { ModelSearch } from './ModelSearch.js';

export class ControllerSearch {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
  }

  filterProducts() {
    const phrase = this.view.getSearchPhrase();
    const filteredProducts = this.model.filterProducts(phrase);
    this.observer.publish('RenderProducts', filteredProducts);
  }

  // sendProductsToRender(products) {
  //   this.router.sendProductsToRender(products);
  // }
}