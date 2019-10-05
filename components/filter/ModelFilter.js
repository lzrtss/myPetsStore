export class ModelFilter {
  constructor(contr) {
    this.controller = contr;
  }

  // chooseFilters(category) {
  //   // some logic...
  //   console.log('Choosing additional filters for', category); // DON'T FORGET TO REMOVE ME!
  //   this.controller.sendFiltersToRender(category);
  // }

  chooseAddFilters(category) {
    console.log('rendering filters for', category);
    this.controller.renderAddFilter(category);
    // define which additional filters should be rendered
    // this.controller.renderAddFilters(category)
  }

  filterByPrice(min, max) {
    min = min || 0;
    max = max || 6000;

    if (min <= max) {
      // get current products array from LS
      const products = JSON.parse(localStorage.getItem('products'));
      // remove old status and add new status
      products.forEach((product) => {
        let index = product.statusFilter.indexOf('filterByPrice');
        if (index !== -1) {
          product.statusFilter.splice(index, 1);
        }
        if (product.price < min || product.price > max) {
          product.statusFilter.push('filterByPrice');
        }
      });

      // rewrite products in LS
      localStorage.setItem('products', JSON.stringify(products));

      return products.filter(product => product.statusFilter.length === 0);
    }
  }

  filterByQty(min, max) {
    min = min || 0;
    max = max || 50;

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
  }

  addFilterProducts(e) {
    console.log('Done'); // REMOVE ME!

    const products = JSON.parse(localStorage.getItem('products'));

    products.forEach(product => {
      let index = product.statusFilter.indexOf('additionalFilter');
      if (index !== -1) {
        product.statusFilter.splice(index, 1);
      }

      // conditions for each category
      console.log(e.target.classList); // REMOVE ME!

      if (e.target.classList.contains('gender')) {

        if (product.gender !== e.target.value) {
          product.statusFilter.push('additionalFilter');
        }
      }

      // if (product.quantity < min || product.quantity > max) {
      //   product.statusFilter.push('additionalFilter');
      // }
    });

    // rewrite products in LS
    localStorage.setItem('products', JSON.stringify(products));

    const dataFiltered = products.filter(product => product.statusFilter.length === 0);

    this.controller.sendProductsToRender(dataFiltered);
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