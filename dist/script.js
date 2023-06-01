const headerNav = document.querySelector('.header__nav');
const contactNav = document.querySelector('.contact__nav');
const toggleContact = document.querySelector('.toggle__contact');
const toggleMenu = document.querySelector('.toggle__menu');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
    contactNav.classList.remove('open');
    toggleContact.classList.remove('open');
});


toggleContact.addEventListener('click', ()=>{
    contactNav.classList.toggle('open');
    toggleContact.classList.toggle('open');
    headerNav.classList.remove('open');
    toggleMenu.classList.remove('open');
});

/*New tab*/
const starNav = document.querySelectorAll(".new__nav__link");
const starContent = document.querySelectorAll(".new__tab__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}

//scroll
const nav = document.querySelectorAll(".header__nav ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

