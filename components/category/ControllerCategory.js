import { ViewCategory } from './ViewCategory.js';
import { ModelCategory } from './ModelCategory.js';

export class ControllerCategory {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelCategory(this);
    this.view = new ViewCategory(this);
  }

  filterByCategory(category) {
    const filteredProdByCateg = this.model.getProdByCategory(category);
    this.observer.publish('CategoryChosen', category);
    this.observer.publish('RenderProducts', filteredProdByCateg);
  }
}