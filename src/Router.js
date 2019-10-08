import { Observer } from '../components/observer/observer.js';
import { ProductController } from '../components/product/productController.js';
import { CategoryController } from '../components/category/categoryController.js';
import { SearchController } from '../components/search/searchController.js';
import { FilterController } from '../components/filter/filterController.js';
import { SortController } from '../components/sort/sortController.js';
import { CartController } from '../components/cart/cartController.js';

export class Router {
  constructor() {
    this.observer = new Observer();
    this.productController = new ProductController(this.observer);
    this.categoryController = new CategoryController(this.observer);
    this.searchController = new SearchController(this.observer);
    this.filterController = new FilterController(this.observer);
    this.sortController = new SortController(this.observer);
    this.cartController = new CartController(this, this.observer); // remove 'this'
  }
}
