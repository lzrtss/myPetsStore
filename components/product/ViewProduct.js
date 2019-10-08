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

    products.forEach(product => this.templater.load(product, this.output));
  }
}
