const toolTips = document.querySelectorAll('.has-tooltip');
const tip = document.createElement('div');
tip.className = 'tooltip';
tip.style = 'position: absolute';

for (toolTip of toolTips) {
  const wrapper = document.createElement('div');
  wrapper.style = 'display: inline-block';
  wrapper.className = 'wrapper';
  wrapper.innerHTML = toolTip.outerHTML;
  toolTip.replaceWith(wrapper);
}

const tipLinks = document.querySelectorAll('.wrapper');

for (tipLink of tipLinks) {
  tipLink.addEventListener('click', function(event) {
    event.preventDefault();
    tip.innerText = event.target.title;
    event.target.parentElement.appendChild(tip);
    tip.classList.add('tooltip_active');
  });
}


