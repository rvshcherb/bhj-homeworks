let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let holeArr = [];

function getHole() {
  for (let i = 1; i < 10; i++) {
    holeArr.push(document.getElementById(`hole${i}`));
  }
}
getHole();

function restart() {
  dead.textContent = 0;
  lost.textContent = 0;
}

function checkGame() {
  if (dead.textContent > 9) {
    alert('Победа!');
    restart();
  } else if (lost.textContent > 4) {
    alert('Вы проиграли :(');
    restart();
  }
}

for (let hole of holeArr) {
  hole.onclick = function() {
    if (hole.className.includes('hole_has-mole' )) {
      dead.textContent = Number(dead.textContent) + 1;
      checkGame();
    } else {
      lost.textContent = Number(lost.textContent) + 1;
      checkGame();
    }
  }
}

