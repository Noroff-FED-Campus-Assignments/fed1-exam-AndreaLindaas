const menuButton = document.querySelector(".menu-button");
const menuChoices = document.querySelector(".menu-choices");

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".input");
const error = document.querySelector(".error ol");
menuButton.onclick = function () {
  searchBar.classList.remove("show");
  menuChoices.classList.toggle("show");
};

searchIcon.onclick = function () {
  menuChoices.classList.remove("show");
  searchBar.classList.toggle("show");
};

function reloadPage() {
  location.reload();
}
function showErrorMessage(message) {
  const errorContainer = document.querySelector(".error");

  error.innerHTML += `<li>${message}</li>`;
  errorContainer.style.display = "block";
}
