document.querySelector(".header__burger").addEventListener("click", function () {
  document.querySelector(".header__menu").classList.add("active");
})
document.querySelector(".header__menu-close").addEventListener("click", function () {
  document.querySelector(".header__menu").classList.remove("active");
})