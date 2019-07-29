const progressBar = document.getElementById('progress');
const form = document.getElementById('form');

function addListeners(xhr) {
  xhr.upload.addEventListener('loadstart', () => console.log('Loading started'));
  xhr.upload.addEventListener('progress', (event) => console.log(event.loaded / event.total));
  xhr.upload.addEventListener('progress', (event) => progressBar.value = (event.loaded / event.total).toFixed(1));
  xhr.upload.addEventListener('load', () => console.log('Loading complete'));
  xhr.upload.addEventListener('loadend', () => console.log('Request has been completed'));
  xhr.upload.addEventListener('error', () => console.log('Error has occured'));
}

form.addEventListener('submit', function () {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  addListeners(xhr);
  xhr.send(formData);
}); 