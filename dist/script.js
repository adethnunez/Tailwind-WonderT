const headerNav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
});

const contactNav = document.querySelector('.contact__nav');
const toggleContact = document.querySelector('.toggle__contact');
toggleContact.addEventListener('click', ()=>{
    contactNav.classList.toggle('open');
    toggleContact.classList.toggle('open');
});

const nav = document.querySelectorAll(".header__nav ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

