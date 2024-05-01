let menuBurger = document.querySelector(".nav__logo");

menuBurger.addEventListener("click", () => {
  let menu = document.querySelector(".list");
  menu.classList.toggle("list--show");
});
