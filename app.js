const navLogo = document.querySelector('#navbar__logo');
const menuLinks = document.querySelector('.navbar__menu');
const menu = document.querySelector('#mobile-menu');


const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
  menu.addEventListener('click', mobileMenu);