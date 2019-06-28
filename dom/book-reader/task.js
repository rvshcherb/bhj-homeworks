const text = document.querySelector('.book');


const sizeControl = document.querySelector('.book__control_font-size');
const colorControl = document.querySelector('.book__control_color');
const backgroundControl = document.querySelector('.book__control_background');



sizeControl.addEventListener('click', function(event) { 
  event.preventDefault();
  this.querySelector('.font-size_active').classList.remove('font-size_active');
  event.target.classList.add('font-size_active');
  text.classList.remove('book_fs-small', 'book_fs-big');
  text.classList.add(`book_fs-${event.target.dataset.size}`);
})

colorControl.addEventListener('click', function(event) { 
  event.preventDefault();
  this.querySelector('.color_active').classList.remove('color_active');
  event.target.classList.add('color_active');
  text.classList.remove('book_color-gray', 'book_color-whitesmoke');
  text.classList.add(`book_color-${event.target.dataset.color}`);
})

backgroundControl.addEventListener('click', function(event) { 
  event.preventDefault();
  this.querySelector('.color_active').classList.remove('color_active');
  event.target.classList.add('color_active');
  text.classList.remove('color-gray', 'color-black');
  text.classList.add(`color_${event.target.dataset.color}`);
})




