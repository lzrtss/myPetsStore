export class ViewCategory {
  constructor() {
    this.navbarBtns = document.querySelectorAll('.category-btn');
  }

  handleEvents(filterByCategory) {
    [...this.navbarBtns].forEach(btn =>
      btn.addEventListener('click', () => filterByCategory(btn.getAttribute('data-categ-type'))));
  }
}