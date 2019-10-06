export class ModelSearch {

  filterProducts(phrase) {
    // get current products array from LS
    const products = JSON.parse(localStorage.getItem('products'));
    // remove old status and add new status
    products.forEach((product) => {
      let index = product.statusFilter.indexOf('search');
      if (index !== -1) {
        product.statusFilter.splice(index, 1);
      }
      if (product.name.toLowerCase().indexOf(phrase.toLowerCase()) === -1) {
        product.statusFilter.push('search');
      }
    });

    // rewrite products in LS
    localStorage.setItem('products', JSON.stringify(products));

    return products.filter(product => product.statusFilter.length === 0);
  }

}