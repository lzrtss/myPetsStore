import Templater from '../../src/Templater.js';

export class ViewProduct {
  constructor(observer) {
    this.observer = observer;
    this.templater = new Templater('./components/product/Product.html');
    this.output = document.querySelector('#products');
  }

  handleEvents(getProducts) {
    document.addEventListener('DOMContentLoaded', getProducts);
  }

  render(products) {
    this.output.innerHTML = '';

    products.forEach(product => {
      this.templater.load(product, this.output);

      // document.querySelector('.add-cart-btn')
      //   .addEventListener('click', this.controller.addToCart.bind(this.controller)); // rewrite using callbacks

    });


    // this.addEvents();
  }

  // addEvents() {
  //   const cartBtns = document.querySelectorAll('.add-cart-btn');
  //   [...cartBtns].forEach(btn =>
  //     btn.addEventListener('click', this.controller.addToCart.bind(this.controller))); // rewrite using callbacks
  // }
}
