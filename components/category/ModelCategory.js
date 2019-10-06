export class ModelCategory {

  getProdByCategory(category) {
    let products = JSON.parse(localStorage.getItem('products'));

    // remove old status and add new status
    products.forEach((product) => {
      let index = product.statusFilter.indexOf('category');
      if (index !== -1) {
        product.statusFilter.splice(index, 1);
      }
      if (product.type !== category && category !== 'all') {
        product.statusFilter.push('category')
      }
    });

    // rewrite products in LS
    localStorage.setItem('products', JSON.stringify(products));

    return products.filter(product => product.statusFilter.length === 0);
  }

}