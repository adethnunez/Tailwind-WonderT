// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");
const blurr = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
    header.classList.toggle("open");
    blurr.classList.toggle("open");
});

// circle
const circle = document.querySelector(".circle");
const circleNav = document.querySelector(".circle__actions");
circle.addEventListener("click", () => {
    circle.classList.toggle("open");
    circleNav.classList.toggle("open");
  });

//drop down
const head = document.querySelectorAll(".header__item h4");
head.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

// help=scroll
const hscroll = document.querySelector(".links__scroll");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 300 && window.pageYOffset <= 400) {
    hscroll.classList.add("sticky");
  } else {
    hscroll.classList.remove("sticky");
  }
});