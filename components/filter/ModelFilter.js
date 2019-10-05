import { additionalFiltersCats, additionalFiltersDogs, additionalFiltersFishes, additionalFiltersBirds } from './filter.js';

export class ModelFilter {
  constructor(contr) {
    this.controller = contr;
  }

  chooseAddFilters(category) {

    console.log('rendering filters for', category); // REMOVE ME!

    let output;

    if (category === 'all') {
      output = '';
    } else if (category === 'cat') {
      output = additionalFiltersCats;
    } else if (category === 'dog') {
      output = additionalFiltersDogs;
    } else if (category === 'fish') {
      output = additionalFiltersFishes;
    } else if (category === 'bird') {
      output = additionalFiltersBirds;
    }

    return [output, category];
  }

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

  addFilterProducts(checkboxValue) {
    console.log('Additional filter:', checkboxValue); // REMOVE ME!

    const products = JSON.parse(localStorage.getItem('products'));

    products.forEach(product => {
      let index = product.statusFilter.indexOf(checkboxValue);
      if (index !== -1) {
        product.statusFilter.splice(index, 1);
      }

      // Cats
      if (checkboxValue === 'male' || checkboxValue === 'female') {
        let filter = 'gender';
        if (product[filter] !== checkboxValue) {
          product.statusFilter.push(checkboxValue);
        }
      }
      if (checkboxValue === 'bald' || checkboxValue === 'short' || checkboxValue === 'long') {
        let filter = 'fur';
        if (product[filter] !== checkboxValue) {
          product.statusFilter.push(checkboxValue);
        }
      }
      // Dogs
      if (checkboxValue === 'small' || checkboxValue === 'medium' || checkboxValue === 'big') {
        let filter = 'fur';
        if (product[filter] !== checkboxValue) {
          product.statusFilter.push(checkboxValue);
        }
      }
      // Fishes
      if (checkboxValue === 'up' || checkboxValue === 'mid' || checkboxValue === 'down') {
        let filter = 'zonality';
        if (!product[filter].contains(checkboxValue)) {
          product.statusFilter.push(checkboxValue);
        }
      }
      if (checkboxValue === 'freshwater' || checkboxValue === 'saltwater') {
        let filter = 'freshwater';
        if (product[filter] == false) {
          product.statusFilter.push(checkboxValue);
        }
      }
      // Birds
      if (checkboxValue === 'talking' || checkboxValue === 'non-talking') {
        let filter = 'talking';
        if (product[filter] == false) {
          product.statusFilter.push(checkboxValue);
        }
      }
      if (checkboxValue === 'rapacity' || checkboxValue === 'non-rapacity') {
        let filter = 'rapacity';
        if (product[filter] == false) {
          product.statusFilter.push(checkboxValue);
        }
      }

    });

    // rewrite products in LS
    localStorage.setItem('products', JSON.stringify(products));

    return products.filter(product => product.statusFilter.length === 0);
  }

  getAllProducts() {
    const products = JSON.parse(localStorage.getItem('notSortedProducts'));
    products.forEach(product => product.statusFilter = []);
    localStorage.setItem('products', JSON.stringify(products));
    return products;

    // SHOULD ALSO CLEAR MAIN FILTERS, CHECKBOXES AND SEARCH BAR!
    // clearFilterValues();
    // removeAddFilters(); // REMOVE ADDITIONAL FILTERS
  }
}