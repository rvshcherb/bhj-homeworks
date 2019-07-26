function currencyRequest() {
  const xhr = new XMLHttpRequest();
  const loadPicture = document.getElementById('loader');
  const currencyList = document.getElementById('items');

  function addCurrencyItem(name, curValue) {
    const item = document.createElement('div');
    const code = document.createElement('div');
    const value = document.createElement('div');
    const currency = document.createElement('div');
    
    item.className = 'item';
    code.className = 'item__code';
    value.className = 'item__value';
    currency.className = 'item__currency';
    
    code.innerText = name;
    value.innerText = curValue;
    currency.innerText = 'руб.';
    
    item.appendChild(code);
    item.appendChild(value);
    item.appendChild(currency);
    
    currencyList.appendChild(item);
  }
  
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', true);
  xhr.responseType = 'json';
  xhr.send();
  
  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === 4) {
      loadPicture.classList.remove('loader_active');
      for (item in xhr.response.response.Valute) {
        addCurrencyItem(
          //когда аргументы очень длинные, их можно так писать, а не в строчку?
          xhr.response.response.Valute[item].CharCode,
          xhr.response.response.Valute[item].Value,
        );
      }
    }
  });
}

currencyRequest();