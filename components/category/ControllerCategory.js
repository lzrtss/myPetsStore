import { ViewCategory } from './ViewCategory.js';
import { ModelCategory } from './ModelCategory.js';

export class ControllerCategory {
  constructor(observer) {
    this.observer = observer;
    this.model = new ModelCategory();
    this.view = new ViewCategory();
    this.handleEvents();
  }

  handleEvents() {
    this.view.handleEvents(this.filterByCategory.bind(this));
  }

  filterByCategory(category) {
    const filteredProdByCateg = this.model.getProdByCategory(category);
    this.observer.publish('CategoryChosen', category);
    this.observer.publish('RenderProducts', filteredProdByCateg);
  }
}