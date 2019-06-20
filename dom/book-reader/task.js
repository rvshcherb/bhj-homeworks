const text = document.querySelector('.book');

const sizes = document.querySelectorAll('.font-size');
const sizeControl = document.querySelector('.book__control_font-size');

const colors = document.querySelectorAll('.book__control.book__control_color .color');
const colorControl = document.querySelector('.book__control_color');

const backgrounds = document.querySelectorAll('.book__control.book__control_background .color');
const backgroundControl = document.querySelector('.book__control_background');


sizeControl.addEventListener('click', function(event) { 
  for (size of sizes) {
    event.preventDefault();
    size.classList.remove('font-size_active');
  }
  event.target.classList.add('font-size_active');

  switch(event.target.dataset.size) {
    case 'small':
    text.classList.add('book_fs-small');
    text.classList.remove('book_fs-big');
    break;
    case 'big':
    text.classList.add('book_fs-big');
    text.classList.remove('book_fs-small');
    break;
    default:
    text.classList.remove('book_fs-big', 'book_fs-small');
  }
})

colorControl.addEventListener('click', function(event) { 
  for (color of colors) {
    event.preventDefault();
    color.classList.remove('color_active');
  }
  event.target.classList.add('color_active');

  switch(event.target.dataset.color) {
    case 'gray':
    text.classList.add('book_color-gray');
    text.classList.remove('book_color-whitesmoke');
    break;
    case 'whitesmoke':
    text.classList.add('book_color-whitesmoke');
    text.classList.remove('book_color-gray');
    break;
    default:
    text.classList.remove('book_color-gray', 'book_color-whitesmoke');
  }
})

backgroundControl.addEventListener('click', function(event) { 
  for (background of backgrounds) {
    event.preventDefault();
    background.classList.remove('color_active');
  }
  event.target.classList.add('color_active');

  switch(event.target.dataset.color) {
    case 'gray':
    text.classList.add('color_gray');
    text.classList.remove('color_black');
    break;
    case 'black':
    text.classList.add('color_black');
    text.classList.remove('color_gray');
    break;
    default:
    text.classList.remove('color_gray', 'color_black');
  }
})



