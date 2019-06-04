let slider = document.getElementsByClassName('slider__item');
let rightArrow = document.querySelector('.slider__arrow_next');
let leftArrow = document.querySelector('.slider__arrow_prev');
let dots = document.querySelectorAll('.slider__dot');
let dotsArr = Array.from(dots);
let i = 0;

function clearClass() {
  for (let s of slider) {
    s.className = 'slider__item';
  }
  for (let d of dots) {
    d.className = 'slider__dot';
  }
}

function setClass() {
  slider[i].className = 'slider__item slider__item_active';
  dots[i].className = 'slider__dot slider__dot_active';
}

rightArrow.onclick = function() {
  if (i < slider.length - 1) {
    i++;
  } else {
    i = 0;
  }
  clearClass();
  setClass();
}

leftArrow.onclick = function() {
  if (i > 0) {
    i--;
  } else {
    i = slider.length - 1;
  }
  clearClass();
  setClass();
}

for (dot of dotsArr) {
  dot.onclick = function() {
    i = dotsArr.indexOf(event.target);
    clearClass();
    setClass();
  }
}