const btn = document.querySelector('.burger');
const menu = document.querySelector('nav ul');

btn.addEventListener('click', () => {
  menu.classList.toggle('showmenulist');
});
