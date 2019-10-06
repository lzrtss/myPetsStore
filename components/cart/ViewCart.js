export class ViewCart {
  constructor(contr) {
    this.controller = contr;
    this.cartBtn = document.querySelector('#cart-btn');
    this.cartDiv = document.querySelector('#cart-placeholder');
    this.cartBtn.addEventListener('click', this.controller.openCart.bind(this.controller));
  }
}