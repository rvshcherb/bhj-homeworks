const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let initCount = 0;

cookie.onclick = function() {
  initCount++;
  counter.textContent =  initCount;
  if (initCount % 2 !== 0) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }  
}