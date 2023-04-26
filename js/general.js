const menuButton = document.querySelector(".menu-button");
const menuChoices = document.querySelector(".menu-choices");

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");

menuButton.onclick = function () {
  menuChoices.classList.toggle("show");
};

searchIcon.onclick = function () {
  console.log("hello");
  searchBar.classList.toggle("show");
};
