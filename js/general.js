const menuButton = document.querySelector(".menu-button");
const menuChoices = document.querySelector(".menu-choices");

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");

menuButton.onclick = function () {
  searchBar.classList.remove("show");
  menuChoices.classList.toggle("show");
};

searchIcon.onclick = function () {
  console.log("hello");
  menuChoices.classList.remove("show");
  searchBar.classList.toggle("show");
};
