const controls = document.querySelectorAll('.product__quantity-controls');
const cart = document.querySelector('.cart__products');
const addToCartButtons = document.querySelectorAll('.product__add');

for (control of controls) {
  control.addEventListener('click', function (event) {
    let counter = this.querySelector('.product__quantity-value');
    if (event.target.classList.contains('product__quantity-control_inc') === true) {
      counter.innerText = Number(counter.innerText) + 1;
    }
    if (event.target.classList.contains('product__quantity-control_dec') === true) {
      if (Number(counter.innerText) > 1) {
        counter.innerText = Number(counter.innerText) - 1;
      } else {
        counter.innerText = 1;
      }
    }
  });
}

for (button of addToCartButtons) {
  button.addEventListener('click', function (event) {
    const itemList = Array.from(document.querySelectorAll('.cart__product'));
    const itemAdded = itemList.find(item => item.dataset.id == event.target.parentElement.closest('.product').dataset.id);

    if (itemAdded != undefined) {
      itemAdded.lastElementChild.innerText = Number(itemAdded.innerText) + Number(event.target.parentElement.querySelector('.product__quantity-value').innerText);
    } else {
      const item = document.createElement('div');
      const itemImage = document.createElement('img');
      const itemCounter = document.createElement('div');
      item.className = 'cart__product';
      item.dataset.id = `${event.target.parentElement.closest('.product').dataset.id}`
      itemImage.className = 'cart__product-image';
      itemCounter.className = 'cart__product-count';
      itemImage.src = `${event.target.closest('.product').querySelector('img').src}`;
      itemCounter.innerText = `${event.target.parentElement.querySelector('.product__quantity-value').innerText}`;

      cart.appendChild(item);
      item.appendChild(itemImage);
      item.appendChild(itemCounter);
    }
  });
}