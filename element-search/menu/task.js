const subMenu = document.getElementsByClassName('menu_sub');
const mainMenuLink = document.querySelectorAll('.menu_main > .menu__item');

for (let m of mainMenuLink) {
  if (m.children.length > 1) {
    m.onclick = function() {
      for (const s of subMenu) {
        s.className = 'menu menu_sub';
      }
      m.children[1].className = 'menu menu_sub menu_active';
      return false;
    }  
  }
}
