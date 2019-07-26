const progressBar = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function () {
  event.preventDefault();
  let input = form.elements.file;
  let file = input.files[0];
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', function (event) {
    progressBar.value = (event.loaded / event.total).toFixed(1);
  });

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.send(file);

  
});