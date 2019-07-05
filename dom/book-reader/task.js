const text = document.querySelector('.book');


const sizeControl = document.querySelectorAll('.book__control_font-size');
const colorControl = document.querySelectorAll('.book__control_color .color');
const backgroundControl = document.querySelectorAll('.book__control_background .color');


for (control of sizeControl) {
  control.addEventListener('click', function(event) { 
    event.preventDefault();
    this.querySelector('.font-size_active').classList.remove('font-size_active');
    event.target.classList.add('font-size_active');
    text.classList.remove('book_fs-small', 'book_fs-big');
    text.classList.add(`book_fs-${event.target.dataset.size}`);
  });
}

for (control of colorControl) {
  control.addEventListener('click', function(event) { 
    event.preventDefault();
    this.parentElement.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');
    text.classList.remove('book_color-gray', 'book_color-whitesmoke');
    text.classList.add(`book_color-${event.target.dataset.color}`);
  });
}

for (control of backgroundControl) {
  control.addEventListener('click', function(event) { 
    event.preventDefault();
    this.parentElement.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');
    text.classList.remove('color_gray', 'color_black');
    text.classList.add(`color_${event.target.dataset.color}`);
  });
}






 