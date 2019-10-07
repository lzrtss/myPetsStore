import Templater from '../../src/Templater.js';

export class ViewProduct {
  constructor(contr, observer) {
    this.observer = observer;
    this.controller = contr;
    this.templater = new Templater('./components/product/Product.html');
    document.addEventListener('DOMContentLoaded', this.controller.getProducts.bind(this.controller));
    this.output = document.querySelector('#products');
  }

  render(products) {
    this.output.innerHTML = '';

    products.forEach(product => {
      this.templater.load(product, this.output);

      // document.querySelector('.add-cart-btn')
      //   .addEventListener('click', this.controller.addToCart.bind(this.controller));

    });


    // this.addEvents();
  }

  addEvents() {
    const cartBtns = document.querySelectorAll('.add-cart-btn');
    [...cartBtns].forEach(btn =>
      btn.addEventListener('click', this.controller.addToCart.bind(this.controller)));
  }
}
