const form = document.querySelector("#form");
const errorMessages = document.querySelector(".error-messages");

const nameInput = document.querySelector("#name");
const nameErrorMessage = document.querySelector(".errormessage-name");

const emailInput = document.querySelector("#email");

const subjectInput = document.querySelector("#subject");
const subjectErrorMessage = document.querySelector(".errormessage-subject");

const messageInput = document.querySelector("#message");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const reset = document.querySelector(".reset");

form.onsubmit = function (event) {
  event.preventDefault();
  // errorMessages.innerHTML = "";
  // validateName(nameInput.value);
  validateEmail(email.value);
  // validateSubject(subject.value);
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

nameInput.addEventListener("input", validateNameRealtime);
function validateNameRealtime() {
  if (nameInput.value.length == 0) {
    nameInput.classList.remove("input-success");
    nameInput.classList.remove("input-error");
    nameErrorMessage.classList.remove("visible");
  } else if (nameInput.value.length < 2) {
    nameInput.classList.remove("input-success");
    nameInput.classList.add("input-error");
    nameErrorMessage.classList.add("visible");
  } else {
    nameInput.classList.add("input-success");
    nameInput.classList.remove("input-error");
    nameErrorMessage.classList.remove("visible");
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
subjectInput.addEventListener("input", validateSubjectRealtime);
function validateSubjectRealtime() {
  if (subjectInput.value.length == 0) {
    subjectInput.classList.remove("input-success");
    subjectInput.classList.remove("input-error");
    subjectErrorMessage.classList.remove("visible");
  } else if (subjectInput.value.trim().length < 15) {
    subjectInput.classList.remove("input-success");
    subjectInput.classList.add("input-error");
    subjectErrorMessage.classList.add("visible");
  } else {
    subjectInput.classList.add("input-success");
    subjectInput.classList.remove("input-error");
    subjectErrorMessage.classList.remove("visible");
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
