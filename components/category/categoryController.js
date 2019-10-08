import { CategoryView } from './categoryView.js';
import { CategoryModel } from './categoryModel.js';

export class CategoryController {
  constructor(observer) {
    this.observer = observer;
    this.view = new CategoryView();
    this.model = new CategoryModel();
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