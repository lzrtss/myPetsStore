import { ViewProduct } from './ViewProduct.js';
import { ModelProduct } from './ModelProduct.js';

export class ControllerProduct {
  constructor(observer) {
    this.observer = observer;
    this.model = new ModelProduct();
    this.view = new ViewProduct();
    this.observer.subscribe('RenderProducts', this.sendProductsToRender.bind(this));
    this.handleEvents();
  }

  handleEvents() {
    this.view.handleEvents(this.getProducts.bind(this));
  }

  getProducts() {
    this.model.getProducts(this.sendProductsToRender.bind(this));
  }

  sendProductsToRender(products) {
    this.view.render(products);
  }

  // addToCart() { // doesn't work
  //   console.log('Added to cart');
  // }
}