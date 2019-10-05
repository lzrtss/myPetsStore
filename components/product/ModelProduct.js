export class ModelProduct {
  constructor(contr) {
    this.controller = contr;
  }

  getProducts(sendProductsToRender) {
    return fetch('./data/goods.json') // remove in case of using URL
      // return fetch('https://cors-anywhere.herokuapp.com/https://gentle-coast-49966.herokuapp.com/get-goods')
      .then(products => products.json())
      .then(products => {
        if (localStorage.getItem('products')) {
          return JSON.parse(localStorage.getItem('products'));
        } else {
          products.forEach(prod => {
            prod.statusFilter = [];
          });
          localStorage.setItem('products', JSON.stringify(products));
          // reset sort
          localStorage.setItem('notSortedProducts', JSON.stringify(products));
        }
        return products;
      })
      .then(products => {
        let filter = products.filter(prodObj => prodObj.statusFilter.length === 0)
        sendProductsToRender(filter);
      });
  }
}