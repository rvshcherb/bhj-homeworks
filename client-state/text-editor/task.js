const editor = document.getElementById('editor');
const clearButton = document.getElementById('button');

document.addEventListener('DOMContentLoaded', () => {
  editor.value = localStorage.getItem('message');
});

editor.addEventListener('input', () => {
  localStorage.setItem('message', editor.value);
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('message');
  editor.value = "";
});

