const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');
const tabArr = Array.from(tabs);
let i;

function clearClass() {
	for (tab of tabs) {
		tab.className = 'tab';
	}
	for (cont of content) {
		cont.className = 'tab__content';
	}
}

function setClass() {
	tabs[i].className = 'tab tab_active';
	content[i].className = 'tab__content tab__content_active';
}

for(tab of tabArr) {
	tab.addEventListener('click', function() {
		i = tabArr.indexOf(event.target);
		clearClass();
		setClass();
	})
}