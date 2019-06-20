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




/******** Решение ч/з массив ********/

// const phrases = Array.from(document.querySelectorAll('.rotator__case'));
// let i = 0;

// function clearClass() {
//   for(phrase of phrases) {
//     phrase.classList.remove('rotator__case_active');
//   }
// }

// function switchPhrase() {
//   clearClass();
//   phrases[i].classList.add('rotator__case_active')
//   i++;
//   if (i > phrases.length - 1) {
//     i = 0;
//   }
// }

// setInterval(switchPhrase, 1000);


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