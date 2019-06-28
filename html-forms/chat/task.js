const chatWidget = document.querySelector('.chat-widget');
const button = document.querySelector('.chat-widget__side');
const input = document.getElementById('chat-widget__input');
let messages = document.getElementById('chat-widget__messages');
const chatArea = document.getElementById('chat-widget__messages');

const replyes = [
  'Чем могу Вам помочь?',
  'В чем проблема?',
  'Нормально можете объяснить?',
  'Вам следует научиться лучше излагать свои мысли!',
  'Я как на это должен реагировать?',
  'Вы хорошо подумали?',
]


button.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));

document.addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    if (input.value == false) {
      console.log('Строка не может быть пустой');
    } else {
      messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${new Date().toTimeString().replace(/ .*/, '')}</div>
      <div class="message__text">
        ${input.value}
      </div>
    </div>
  `;

  messages.innerHTML += `
    <div class="message">
      <div class="message__time">${new Date().toTimeString().replace(/ .*/, '')}</div>
      <div class="message__text">
        ${replyes[Math.floor(Math.random() * replyes.length)]}
      </div>
    </div>
  `;
  input.value = "";
  chatArea.lastElementChild.scrollIntoView(true);
    }
  }
})


/******     Автоматическое начало разговора при фокусе 30 сек      ******/

let delay = 0;

function delaySec() {
  delay += 1;
}

input.addEventListener('focus', () => setInterval(delaySec, 1000)); 
input.addEventListener('input', () => delay = 0);

function askQuestion() {
    if (delay > 30) { 
      messages.innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().toTimeString().replace(/ .*/, '')}</div>
        <div class="message__text">
        ${replyes[Math.floor(Math.random() * replyes.length)]}
        </div>
        </div>
        `;
      clearInterval(count);
    } else if (!!chatArea.lastElementChild == true) { //данное условие необходимо, чтобы остановить счетчик, если разговор начат
      clearInterval(count);
    }
  }

count = setInterval(askQuestion, 1000);

