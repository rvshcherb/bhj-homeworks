const survey = document.querySelector('.poll');
const surveyTitle = document.getElementById('poll__title');
const surveyAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

function createButton(value, index) {
  const button = document.createElement('button');
  button.innerText = value;
  button.className = 'poll__answer';
  button.id = index;
  surveyAnswers.appendChild(button);
}

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    surveyTitle.innerText = `${xhr.response.data.title}`;
    survey.id = xhr.response.id;
    for (item in xhr.response.data.answers) {
      createButton(xhr.response.data.answers[item], item);
    }
  }
});

survey.addEventListener('click', () => {
  if (event.target.classList.contains('poll__answer')) {
    const resultRequest = new XMLHttpRequest();
    resultRequest.open('POST', ' https://netology-slow-rest.herokuapp.com/poll.php');
    resultRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    resultRequest.responseType = 'json';
    resultRequest.send(`vote=${survey.id}&answer=${event.target.id}`);

    alert('Спасибо! Ваш голос засчитан!');

    resultRequest.addEventListener('readystatechange', () => {
      if (resultRequest.readyState === 4) {
        surveyAnswers.remove();

        let votesTotal = 0;
        for (item in resultRequest.response.stat) {
          votesTotal += resultRequest.response.stat[item].votes;
        }
        for (item in resultRequest.response.stat) {
          const surveyResult = document.createElement('div');
          surveyResult.innerHTML = `${resultRequest.response.stat[item].answer}: <strong> ${(resultRequest.response.stat[item].votes / votesTotal * 100).toFixed(2)}% </strong>`;
          survey.appendChild(surveyResult);
        }
      }
    });
  }
});