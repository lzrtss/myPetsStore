export class ViewCategory {
  constructor(contr) {
    this.controller = contr;
    document.addEventListener('DOMContentLoaded', this.renderNavbar);
    this.output = document.querySelector('#products');
    this.handleEvents();
  }

  renderNavbar() {
    // document.querySelector('#jjj').innerHTML = this.templater.load(product, this.output);
  }

  handleEvents() {
    const navbarBtns = document.querySelectorAll('.category-btn');
    [...navbarBtns].forEach(btn => btn
      .addEventListener('click', () => this.controller.filterByCategory(btn.getAttribute('data-categ-type'))));
  }

  getCategory(e) {
    return e.target.parentNode.id;
  }
}