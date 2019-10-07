export class ViewCategory {
  constructor() {
    // document.addEventListener('DOMContentLoaded', this.renderNavbar); // remove if don't use!
    // this.output = document.querySelector('#products'); // remove if don't use!
    this.navbarBtns = document.querySelectorAll('.category-btn');
  }

  // renderNavbar() { // remove if don't use!
  // document.querySelector('#jjj').innerHTML = this.templater.load(product, this.output);
  // }

  handleEvents(filterByCategory) {
    [...this.navbarBtns].forEach(btn =>
      btn.addEventListener('click', () => filterByCategory(btn.getAttribute('data-categ-type'))));
  }

}