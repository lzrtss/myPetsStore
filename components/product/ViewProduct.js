import Templater from '../../src/Templater.js';

export class ViewProduct {
  constructor(contr) {
    this.controller = contr;
    this.templater = new Templater('./components/product/Product.html');
    this.output = document.querySelector('#products');
  }

  render(products) {
    this.output.innerHTML = '';

    products.forEach(product => {
      this.templater.load(product, this.output);
    });

    localStorage.setItem('curFilteredProducts', JSON.stringify(products));
  }

  showCurrentProducts() {
    const curFilteredProducts = JSON.parse(localStorage.getItem('curFilteredProducts'));
    console.log(curFilteredProducts); // DON'T FORGET TO REMOVE ME!
  }
}
