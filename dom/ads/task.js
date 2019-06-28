/******** Решение ч/з навигацию по элементам ********/

let phrase = document.querySelector('.rotator__case');

function switchPhrase() {
  if (phrase.classList.contains('rotator__case_active')) {
    phrase.classList.remove('rotator__case_active');
  }
  phrase = phrase.nextElementSibling;
  if (phrase == null) {
    phrase = document.querySelector('.rotator__case');
  }
  phrase.classList.add('rotator__case_active');
}

setInterval(switchPhrase, 1000);




/******** Решение ч/з навигацию по элементам с изменяемой скоростью ********/

// let phrase = document.querySelector('.rotator__case');
// let duration = 1000;

// function switchPhrase() {
//   if (phrase.classList.contains('rotator__case_active')) {
//     phrase.classList.remove('rotator__case_active');
//   }
//   phrase = phrase.nextElementSibling;
//   if (phrase == null) {
//     phrase = document.querySelector('.rotator__case');
//   }
//   phrase.classList.add('rotator__case_active');
//   duration = phrase.dataset.speed;
//   console.log(duration)
//   return duration;
// }

// setInterval(switchPhrase, duration);