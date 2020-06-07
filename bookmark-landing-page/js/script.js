/* Menu hamburger */

const menuHamburger = document.querySelector(".menu__hamburger");
const menuUl = document.querySelector(".menu__ul");

menuHamburger.addEventListener("click", () => menuUl.classList.toggle("open"));
