document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.logo__title').classList.add('rotate');
  });
  
  const navMobileClose = document.querySelector('.icon-cont');
  const mobileMenu = document.querySelector('.mobile-menu');
  const humbMenu = document.querySelector('#open');
  const section = document.querySelectorAll('.link-mobile-menu');
  function closeMenu() { mobileMenu.style.display = 'none'; }
  navMobileClose.addEventListener('click', closeMenu);
  function OpenMenu() {
    mobileMenu.style.display = 'block';
  }
  humbMenu.addEventListener('click', OpenMenu);
  section.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });