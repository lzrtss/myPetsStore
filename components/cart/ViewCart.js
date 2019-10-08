import Templater from '../../src/Templater.js';

export class ViewCart {
  constructor(contr) {
    this.controller = contr;
    this.cartBtn = document.querySelector('#cart-btn');
    this.templater = new Templater('./components/cart/cart.html');
    this.cartDiv = document.querySelector('#cart-placeholder');
    this.allProducts = document.querySelector('#products'); // ???
    this.allProducts.addEventListener('click', this.addToCart.bind(this)); // ??? use controller
    this.cartBtn.addEventListener('click', this.loadCart.bind(this)); // use controller
    // this.cartBtn.addEventListener('click', this.controller.openCart.bind(this.controller));
  }

  // ВЫНЕСТИ ВСЕ ОБРАБОТЧИКИ В Ф-ЦИЮ HANDLEEVENTS() И ЗАПУСКАТЬ ЧЕРЕЗ CONTROLLER!!!

  handleEvents() {

  }

  loadCart() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    cartProducts.forEach(prod => this.templater.load(prod, this.cartDiv));
    // this.templater.load(null, this.cartDiv);
  }

  addToCart(e) {
    if (e.target.classList.contains('add-cart-btn')) {

      const id = e.target.getAttribute('data-id');
      const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

      const allProducts = JSON.parse(localStorage.getItem('products'));
      const product = allProducts.find(prod => prod.id == id);

      if (cartProducts.find(prod => prod.id == id)) {
        if (product.ordered < product.quantity) {
          cartProducts.forEach(prod => {
            if (prod.id == id) {
              prod.ordered += 1;
            }
          });
          product.ordered += 1;

        } else {
          document.querySelector(`[data-id='${id}']`)
            .setAttribute('disabled', 'disabled');
        }
      } else if (product.ordered < product.quantity) {
        product.ordered += 1;
        cartProducts.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      }

      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      localStorage.setItem('products', JSON.stringify(allProducts));

      // LABEL FOR CART
      let totalAmount = 0;
      allProducts.forEach(prod => {
        totalAmount += prod.ordered;
      });

      document.querySelector('#cart-number').innerHTML = totalAmount;
    }
  }

}
