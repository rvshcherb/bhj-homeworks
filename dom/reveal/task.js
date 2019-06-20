const blocks = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
  for (block of blocks) {
    let topSpace = window.innerHeight - block.getBoundingClientRect().top
    if (topSpace > 0) {
      block.classList.add('reveal_active');
    }
  }
});

/*
Принцип решения:

window.innerHeight - возвращает высоту видимой области браузера.
element.getBoundingClientRect().top - возвращает расстояние от верхней точки элемента до верхней границы видимой области. 

Если из первого вычесть второе и сумма будет выше нуля, это означает. что высота видимой области больше расстояния от объекта до верхней границы видимой области, значит объект стал видимым. 

Так же есть еще глобальное свойство pageYOffset. Оно показывает насколько px была прокручена страница от начала. 
*/