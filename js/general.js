const menuButton = document.querySelector(".menu-button");
const menuChoices = document.querySelector(".menu-choices");

menuButton.onclick = function () {
  menuChoices.classList.toggle("show");
  console.log("hello");
};
