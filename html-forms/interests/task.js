const interests = document.querySelectorAll('li .interests');

for (let i = 0; i < interests.length; i++) {
  let check = true;
  interests[i].closest('.interest').firstElementChild.querySelector('.interest__check').addEventListener('change', function() {
    if (this.checked == true) {
      check = true;
    } else {
      check = false;
    }
    event.target.closest('.interest').lastElementChild.querySelector('.interest__check').checked = check;
    event.target.closest('.interest').lastElementChild.lastElementChild.querySelector('.interest__check').checked = check;
  });
}

