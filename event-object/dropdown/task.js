const button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');

button.addEventListener('click', function() {
	list.className = list.className == 'dropdown__list dropdown__list_active' ? 'dropdown__list ' : 'dropdown__list dropdown__list_active' ;
})

for (item of items) {
	item.addEventListener('click', function(event) {
		list.className = 'dropdown__list';
		button.textContent = event.target.textContent;
		event.preventDefault();
	})
}
