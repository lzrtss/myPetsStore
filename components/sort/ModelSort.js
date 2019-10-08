export class ModelSort {

  sortProducts(sortType) {
    // Get current products array from LS
    const products = JSON.parse(localStorage.getItem('products'));

    if (sortType === 'sort-price-up') {
      products.sort((product1, product2) => product1.price - product2.price);
    } else if (sortType === 'sort-price-down') {
      products.sort((product1, product2) => product2.price - product1.price);
    } else if (sortType === 'sort-qty-up') {
      products.sort((product1, product2) => product1.quantity - product2.quantity);
    } else if (sortType === 'sort-qty-down') {
      products.sort((product1, product2) => product2.quantity - product1.quantity);
    }

    // Rewrite current products array to LS
    localStorage.setItem('products', JSON.stringify(products));

    return products.filter(product => product.statusFilter.length === 0);
  }

}
