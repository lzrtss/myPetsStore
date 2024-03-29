import { CartView } from './cartView.js';
import { CartModel } from './cartModel.js';

export class CartController {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new CartModel(this);
    this.view = new CartView(this);
    this.observer.subscribe('RenderCart', this.loadCart.bind(this));
    this.handleEvents();
  }

  handleEvents() {
    this.view.handleEvents(
      // this.addToCart.bind(this),
      // this.loadCart.bind(this)
    );
  }

  openCart() {
    console.log('Opened cart'); // REMOVE ME!!!

    // const addedProducts = this.model.getAddedProducts;
    this.observer.publish('RenderCart', addedProducts);
    // this.loadCart(addedProducts); // ????
  }

  loadCart(addedProducts) {
    this.view.loadCart();
  }
}