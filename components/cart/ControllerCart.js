import { ViewCart } from './ViewCart.js';
import { ModelCart } from './ModelCart.js';

export class ControllerCart {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelCart(this);
    this.view = new ViewCart(this);
  }

  openCart() {
    console.log('Opened cart'); // REMOVE ME!!!

    // const addedProducts = this.model.getAddedProducts;
    // this.observer.publish('RenderCart', addedProducts); // smth like that
  }
}