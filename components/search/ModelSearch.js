export class ModelSearch {

  filterProducts(phrase) {
    // Get current products array from LS
    const products = JSON.parse(localStorage.getItem('products'));
    // Remove old status and add new status
    products.forEach((product) => {
      let index = product.statusFilter.indexOf('search');
      if (index !== -1) {
        product.statusFilter.splice(index, 1);
      }
      if (product.name.toLowerCase().indexOf(phrase.toLowerCase()) === -1) {
        product.statusFilter.push('search');
      }
    });

    // Rewrite current products array to LS
    localStorage.setItem('products', JSON.stringify(products));

    return products.filter(product => product.statusFilter.length === 0);
  }

}