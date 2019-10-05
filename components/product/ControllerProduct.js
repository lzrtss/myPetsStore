import { ViewProduct } from './ViewProduct.js';
import { ModelProduct } from './ModelProduct.js';

export class ControllerProduct {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);
    this.observer.subscribe('RenderProducts', this.sendProductsToRender.bind(this));
  }

  getProducts() {
    this.model.getProducts(this.sendProductsToRender.bind(this));
  }

  sendProductsToRender(products) {
    this.view.render(products);
  }
}