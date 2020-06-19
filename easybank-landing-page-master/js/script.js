const menuHamburger = document.querySelector(".menu__ul__hamburger");

function handleMenu() {
  document.querySelector("body").classList.toggle("open");
  document.querySelector("header").classList.toggle("open");
}

menuHamburger.addEventListener("click", handleMenu);
