const menu = document.querySelector('.menu');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    menu.classList.add('scrollmenu');
  } else {
    menu.classList.remove('scrollmenu');
  }
});
