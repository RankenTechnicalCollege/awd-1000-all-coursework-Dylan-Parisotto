/*
Student name: Dylan Parisotto
File name: script.js
Date: 6/22/2026
*/

function toggleMenu() {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('nav-menu');
  const isOpen = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger-btn');
  if (btn) {
    btn.addEventListener('click', toggleMenu);
  }
});
