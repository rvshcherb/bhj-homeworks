const counter = document.getElementById('timer');
let stopCount;
counter.textContent = '5';

function countDown() {
  if (counter.textContent > 0) {
    counter.textContent = counter.textContent - 1;
    console.log(counter.textContent)
  } else {
    clearInterval(stopCount);
    alert ('Вы победили в конкурсе!')
  }
}

stopCount = setInterval(countDown, 1000);