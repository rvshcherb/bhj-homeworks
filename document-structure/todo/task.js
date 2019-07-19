const taskList = document.getElementById('tasks__list');
const addButton = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');

addButton.addEventListener('click', () => {
  event.preventDefault();
  if (taskInput.value != false) {
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskRemove = document.createElement('a');

    task.classList = 'task';
    taskTitle.classList = 'task__title';
    taskList.appendChild(task);
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    taskTitle.innerText = `${taskInput.value}`;
    taskInput.value = "";
    taskRemove.outerHTML = '<a href="#" class="task__remove">&times;</a>';
  } else {
    alert('Строка для ввода пуста!');
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('task__remove')) {
    event.target.parentElement.remove();
  }
});