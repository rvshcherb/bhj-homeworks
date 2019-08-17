const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if(Cookies.get('modalShown')){
  modal.classList.remove('modal_active');
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = "modalShown=true";
});



