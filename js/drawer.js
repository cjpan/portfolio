/*
 * Open the drop-menu when the menu ison is clicked.
 */
var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drop_drawer = document.querySelector('#drop-drawer');

menu.addEventListener('click', function(e) {
  drop_drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drop_drawer.classList.remove('open');
});