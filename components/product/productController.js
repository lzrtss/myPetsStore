import { ProductView } from './productView.js';
import { ProductModel } from './productModel.js';

export class ProductController {
  constructor(observer) {
    this.observer = observer;
    this.model = new ProductModel();
    this.view = new ProductView();
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
}