export class FilterModel {

  filterByPrice(min, max) {
    min = parseInt(min) || 0;
    max = parseInt(max) || 6000;

    if (min > max) {
      max = 6000;
    }

    if (min <= max) {
      const products = JSON.parse(localStorage.getItem('products'));

      products.forEach((product) => {
        let index = product.statusFilter.indexOf('filterByPrice');
        if (index !== -1) {
          product.statusFilter.splice(index, 1);
        }
        if (product.price < min || product.price > max) {
          product.statusFilter.push('filterByPrice');
        }
      });

      localStorage.setItem('products', JSON.stringify(products));

      return products.filter(product => product.statusFilter.length === 0);
    }

    return JSON.parse(localStorage.getItem('products'));
  }

  filterByQty(min, max) {
    min = parseInt(min) || 0;
    max = parseInt(max) || 50;

    if (min > max) {
      max = 50;
    }

    if (min <= max) {
      const products = JSON.parse(localStorage.getItem('products'));

      products.forEach(product => {
        let index = product.statusFilter.indexOf('filterByQty');
        if (index !== -1) {
          product.statusFilter.splice(index, 1);
        }
        if (product.quantity < min || product.quantity > max) {
          product.statusFilter.push('filterByQty');
        }
      });

      localStorage.setItem('products', JSON.stringify(products));
      return products.filter(product => product.statusFilter.length === 0);
    }

    return JSON.parse(localStorage.getItem('products'));
  }

  getAllProducts() {
    const products = JSON.parse(localStorage.getItem('notSortedProducts'));
    products.forEach(product => product.statusFilter = []);
    localStorage.setItem('products', JSON.stringify(products));
    return products;
  }

}