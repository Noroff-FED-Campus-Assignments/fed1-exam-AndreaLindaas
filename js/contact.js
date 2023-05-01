const form = document.querySelector("#form");
const errorMessages = document.querySelector(".error-messages");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

form.onsubmit = function (event) {
  event.preventDefault();
  errorMessages.innerHTML = "";
  validateName(nameInput.value);
  validateEmail(email.value);
  validateSubject(subject.value);
  validateMessage(message.value);
  if (errorMessages.innerHTML === "") {
    modal.style.display = "block";
  }
};

closeModal.onclick = function () {
  modal.style.display = "none";
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
};

function validateName(name) {
  if (!name) {
    let errorMessage = "<li>Name is required</li>";
    errorMessages.innerHTML += errorMessage;
    nameInput.classList.add("input-error");
    nameInput.classList.remove("input-success");
  } else {
    nameInput.classList.remove("input-error");
    nameInput.classList.add("input-success");
  }
}
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  if (!patternMatches) {
    let errorMessage = "<li>Email is required</li>";
    errorMessages.innerHTML += errorMessage;
    emailInput.classList.add("input-error");
    emailInput.classList.remove("input-success");
  } else {
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-success");
  }
}

function validateSubject(subject) {
  if (!subject) {
    let errorMessage = "<li>Subject is required</li>";
    errorMessages.innerHTML += errorMessage;
    subjectInput.classList.add("input-error");
    subjectInput.classList.remove("input-success");
  } else if (subject.trim().length < 15) {
    let errorMessage = "<li>Subject is to short (min 15)</li>";
    errorMessages.innerHTML += errorMessage;
    subjectInput.classList.add("input-error");
    subjectInput.classList.remove("input-success");
  } else {
    subjectInput.classList.remove("input-error");
    subjectInput.classList.add("input-success");
  }
}

function validateMessage(message) {
  if (!message) {
    let errorMessage = "<li>Message is required</li>";
    errorMessages.innerHTML += errorMessage;
    messageInput.classList.add("input-error");
    messageInput.classList.remove("input-success");
  } else if (message.trim().length < 25) {
    let errorMessage = "<li>Message is too short (min 25)</li>";
    errorMessages.innerHTML += errorMessage;
    messageInput.classList.add("input-error");
    messageInput.classList.remove("input-success");
  } else {
    messageInput.classList.remove("input-error");
    messageInput.classList.add("input-success");
  }
}
