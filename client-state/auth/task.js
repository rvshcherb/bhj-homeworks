const welcome = document.getElementById('welcome');
const form = document.getElementById('signin__form');
const authForm = document.getElementById('signin');
const userID = document.getElementById('user_id');

function welcomeUser() {
  welcome.classList.add('welcome_active');
  userID.innerText = localStorage.getItem('id');
}

if (localStorage.getItem('id')) {
  welcomeUser();
} else {
  authForm.classList.add('signin_active');
  const xhr = new XMLHttpRequest();

  form.addEventListener('submit', () => {
    event.preventDefault();
    const formData = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);
    xhr.responseType = 'json';
    xhr.send(formData);
  });

  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === 4) {
      if (xhr.response.success === true) {
        localStorage.setItem('id', xhr.response.user_id);
        authForm.classList.remove('signin_active');
        welcomeUser();
      } else {
        alert('Неверный логин/пароль!');
      }
    }
  });
}