const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');


modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = "modalShown=true";
});

document.addEventListener('DOMContentLoaded', () => document.cookie = "test=1; max-age=3600");  

Cookies.set('name', 'vasya');

