
import { Observer } from '../components/observer/Observer.js';
import { ControllerProduct } from '../components/product/ControllerProduct.js';
import { ControllerCategory } from '../components/category/ControllerCategory.js';
import { ControllerSearch } from '../components/search/ControllerSearch.js';
import { ControllerFilter } from '../components/filter/ControllerFilter.js';
import { ControllerSort } from '../components/sort/ControllerSort.js';
// import { ControllerCart } from '../components/cart/ControllerCart.js';

export class Router {
  constructor() {
    this.observer = new Observer();
    this.controllerProduct = new ControllerProduct(this, this.observer);
    this.controllerCategory = new ControllerCategory(this, this.observer);
    this.controllerSearch = new ControllerSearch(this, this.observer);
    this.controllerFilter = new ControllerFilter(this, this.observer);
    this.controllerSort = new ControllerSort(this, this.observer);
    // this.controllerCart = new ControllerCart(this);
  }

  // sendProductsToRender(products) {
  //   this.controllerProduct.sendProductsToRender(products);
  // }

  // throwCategoryToFilters(category) {
  //   this.controllerFilter.chooseAddFilters(category);
  // }

  showAddFilters(category) {
    this.controllerFilter.showAddFilters(category);
  }
}