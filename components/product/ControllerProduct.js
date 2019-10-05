import { ViewProduct } from './ViewProduct.js';
import { ModelProduct } from './ModelProduct.js';

export class ControllerProduct {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);

    document.addEventListener('DOMContentLoaded', this.model.getProducts.bind(this)); // переместить во вью
    this.observer.subscribe('Products are ready for render', this.sendProductsToRender.bind(this));
  }

  sendProductsToRender(products) {
    this.view.render(products);
  }
}