export class ProductModel {
  getProducts(sendProductsToRender) {
    fetch('./data/goods.json')
      // return fetch('https://cors-anywhere.herokuapp.com/https://gentle-coast-49966.herokuapp.com/get-goods')
      .then(products => products.json())
      .then(products => {
        if (localStorage.getItem('products')) {
          return JSON.parse(localStorage.getItem('products'));
        } else {
          products.forEach(prod => {
            prod.statusFilter = [];
            prod.ordered = 0;
          });
          localStorage.setItem('products', JSON.stringify(products));
          localStorage.setItem('notSortedProducts', JSON.stringify(products));
          localStorage.setItem('cartProducts', JSON.stringify([]));
        }
        return products;
      })
      .then(products => {
        let filter = products.filter(prodObj => prodObj.statusFilter.length === 0);
        sendProductsToRender(filter);
      });
  }
}