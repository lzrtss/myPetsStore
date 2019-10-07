import Templater from '../../src/Templater.js';

export class ViewCart {
  constructor(contr) {
    this.controller = contr;
    this.cartBtn = document.querySelector('#cart-btn');
    this.templater = new Templater('./components/cart/cart.html');
    this.cartDiv = document.querySelector('#cart-placeholder');
    this.allProducts = document.querySelector('#products'); // ???
    this.allProducts.addEventListener('click', this.addToCart.bind(this)); // ??? use controller
    this.cartBtn.addEventListener('click', this.loadCart.bind(this)); // use controller
    // this.cartBtn.addEventListener('click', this.controller.openCart.bind(this.controller));
  }

  loadCart() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    cartProducts.forEach(prod => this.templater.load(prod, this.cartDiv));
    // this.templater.load(null, this.cartDiv);
  }

  addToCart(e) {
    if (e.target.classList.contains('add-cart-btn')) {

      const id = e.target.getAttribute('data-id');
      const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

      const allProducts = JSON.parse(localStorage.getItem('products'));
      const product = allProducts.find(prod => prod.id == id);

      if (cartProducts.find(prod => prod.id == id)) {
        if (product.ordered < product.quantity) {
          cartProducts.forEach(prod => {
            if (prod.id == id) {
              prod.ordered += 1;
            }
          });
          product.ordered += 1;

        } else {
          document.querySelector(`[data-id='${id}']`)
            .setAttribute('disabled', 'disabled');
        }
      } else if (product.ordered < product.quantity) {
        product.ordered += 1;
        cartProducts.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      }

      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      localStorage.setItem('products', JSON.stringify(allProducts));

      // LABEL FOR CART
      let totalAmount = 0;
      allProducts.forEach(prod => {
        totalAmount += prod.ordered;
      });

      document.querySelector('#cart-number').innerHTML = totalAmount;
    }
  }


}

/*
1. При клике на кнопку корзины - должна открываться в модальном окне;
2. Отображать количество добавленных товаров с информацией (порода, категория, пол - количество - цена - кнопка "Удалить товар");
  2.1. Количество товаров можно изменять из корзины;
    - если уменьшить количество до нуля - удалить товар из корзины;
    - нельзя добавить большее количество товаров, чем есть в наличии;
  2.2. Отображать количество товаров в корзине на кнопке корзины в верхнем меню навигации сайта;
3. Сверху кнопка "Закрыть" или "Продолжить покупки";
  3.1. После закрытия корзины, при ее повторном открытии должны сохраниться все товары, что были до ее закрытия;
4. Внизу должна отображаться общая стоимость товаров и кнопка "Оформить заказ";
5. При клике на кнопку добавления товара в корзину, ее текст должен измениться на "Added " + количество данного товара, добавленное в корзину (не обязательно!);
  5.1. Если добавлены всё доступное количество данного товара - блокировать кновку добавления в корзину;

*/