const toolTips = document.querySelectorAll('.has-tooltip');


for (toolTip of toolTips) {
  const wrapper = document.createElement('div');
  const tip = document.createElement('div');
  wrapper.style = "display: inline-block";
  wrapper.className = "wrapper";
  wrapper.innerHTML = toolTip.outerHTML;
  toolTip.replaceWith(wrapper);
  tip.className= "tooltip";
  tip.innerText = `${toolTip.title}`;
  wrapper.appendChild(tip);
}

const tipLinks = document.querySelectorAll('.wrapper');

for (tipLink of tipLinks) {
  tipLink.addEventListener('click', function(event) {
    event.preventDefault();
    event.target.nextElementSibling.classList.toggle('tooltip_active');
  });
}



