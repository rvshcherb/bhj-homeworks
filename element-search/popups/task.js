//Активация модального окна
const modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';

//Закрытие модальных окон при клике на элементы класса .modal__close
let modalCloseElements = document.querySelectorAll('.modal__close')

for (const m of modalCloseElements) {
  m.onclick = function() {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
  }
}


//Активация "успешного" модального окна
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');
showSuccess.onclick = function() {
  modalSuccess.className = 'modal modal_active';
}



