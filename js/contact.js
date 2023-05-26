const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const nameErrorMessage = document.querySelector(".errormessage-name");

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector(".errormessage-email");

const subjectInput = document.querySelector("#subject");
const subjectErrorMessage = document.querySelector(".errormessage-subject");

const messageInput = document.querySelector("#message");
const messageErrorMessage = document.querySelector(".errormessage-message");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

form.onsubmit = function (event) {
  event.preventDefault();
  const result = document.querySelectorAll("li.visible");
  if (result.length == 0) {
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
  if (nameInput.value.length < 2) {
    nameInput.classList.remove("input-success");
    nameInput.classList.add("input-error");
    nameErrorMessage.classList.add("visible");
  } else {
    nameInput.classList.add("input-success");
    nameInput.classList.remove("input-error");
    nameErrorMessage.classList.remove("visible");
  }
}
emailInput.addEventListener("input", validateEmailRealtime);
function validateEmailRealtime() {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(emailInput.value);
  if (!patternMatches) {
    emailInput.classList.remove("input-success");
    emailInput.classList.add("input-error");
    emailErrorMessage.classList.add("visible");
  } else {
    emailInput.classList.add("input-success");
    emailInput.classList.remove("input-error");
    emailErrorMessage.classList.remove("visible");
  }
}

subjectInput.addEventListener("input", validateSubjectRealtime);
function validateSubjectRealtime() {
  if (subjectInput.value.trim().length < 15) {
    subjectInput.classList.remove("input-success");
    subjectInput.classList.add("input-error");
    subjectErrorMessage.classList.add("visible");
  } else {
    subjectInput.classList.add("input-success");
    subjectInput.classList.remove("input-error");
    subjectErrorMessage.classList.remove("visible");
  }
}
messageInput.addEventListener("input", validateMessageRealtime);
function validateMessageRealtime() {
  if (messageInput.value.trim().length < 25) {
    messageInput.classList.remove("input-success");
    messageInput.classList.add("input-error");
    messageErrorMessage.classList.add("visible");
  } else {
    messageInput.classList.add("input-success");
    messageInput.classList.remove("input-error");
    messageErrorMessage.classList.remove("visible");
  }
}
