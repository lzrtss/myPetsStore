import { ViewSort } from './ViewSort.js';
import { ModelSort } from './ModelSort.js';

export class ControllerSort {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelSort(this);
    this.view = new ViewSort(this);
  }

  sortProducts(sortType) {
    const sortedProducts = this.model.sortProducts(sortType);

    this.observer.publish('Products are ready for render', sortedProducts);
  }

  // sendProductsToRender(products) {
  //   this.router.sendProductsToRender(products);
  // }
}