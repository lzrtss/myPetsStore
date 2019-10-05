import { ViewFilter } from './ViewFilter.js';
import { ModelFilter } from './ModelFilter.js';

export class ControllerFilter {
  constructor(router, observer) {
    this.observer = observer;
    this.router = router;
    this.model = new ModelFilter(this);
    this.view = new ViewFilter(this);
    this.observer.subscribe('CategoryChosen', this.chooseAddFilters.bind(this));
    this.observer.subscribe('ShowAdditionalFilters', this.sendAddFiltersToRender.bind(this));
  }

  chooseAddFilters(category) { // ???
    const output = this.model.chooseAddFilters(category);
    this.observer.publish('ShowAdditionalFilters', output);
  }

  sendAddFiltersToRender([output, category]) { // ???
    this.view.renderAddFilter([output, category]);
  }

  additionalFilterProducts(checkboxValue) {
    console.log('Checkbox value:', checkboxValue); // REMOVE ME!

    const additionFilteredProd = this.model.addFilterProducts(checkboxValue);
    this.observer.publish('RenderProducts', additionFilteredProd);
  }

  filterByPrice() {
    const minMaxObj = this.view.getMinMaxPrice();
    const filteredProducts = this.model.filterByPrice(minMaxObj.minPrice, minMaxObj.maxPrice);
    this.observer.publish('RenderProducts', filteredProducts);
  }

  filterByQty() {
    const minMaxObj = this.view.getMinMaxQty();
    const filteredProducts = this.model.filterByQty(minMaxObj.minQty, minMaxObj.maxQty);
    this.observer.publish('RenderProducts', filteredProducts);
  }

  removeFilters() {
    const allProducts = this.model.getAllProducts();
    this.observer.publish('RenderProducts', allProducts);
  }
}