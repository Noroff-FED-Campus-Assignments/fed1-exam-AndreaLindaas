const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts/" + id + "?_embed";

const commentUrl =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/comments?post=" + id;

const post = document.querySelector(".post");
const featuredImage = document.querySelector(".image-header");
const headline = document.querySelector(".headline");
const modalShadow = document.querySelector(".modal-shadow");
const comments = document.querySelector(".comments");
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorComment = document.querySelector(".error-comment");

async function getPost() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    showHeadline(result);
    showFeaturedImage(result);
    showPost(result);
    titleName(result);
  } catch (e) {
    showErrorMessage("Something went wrong when fetching blogpost.");
  }
}

function showFeaturedImage(image) {
  featuredImage.style.backgroundImage = `url(${image._embedded["wp:featuredmedia"]["0"].media_details.sizes["1536x1536"].source_url})`;
}
function showHeadline(blogpost) {
  headline.innerHTML = blogpost.title.rendered;
}
function showPost(blogpost) {
  post.innerHTML = blogpost.content.rendered;

  const cbox = document.querySelectorAll(".post figure img");

  for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", function (event) {
      showModalImage(event);
    });
  }
}
function titleName(blogpost) {
  document.title = `${blogpost.title.rendered}`;
  document.querySelector(".title").innerHTML = document.title;
}

function showModalImage(event) {
  event.target.classList.toggle("modal");
  if (event.target.classList.contains("modal")) {
    modalShadow.classList.add("modal-active");
  } else {
    modalShadow.classList.remove("modal-active");
  }
}

modalShadow.onclick = function () {
  modalShadow.classList.remove("modal-active");
  document.querySelector(".modal").classList.remove("modal");
};

//Comments

async function getComments() {
  try {
    const response = await fetch(commentUrl);
    const result = await response.json();
    showComments(result);
  } catch (e) {
    showErrorMessage("Something went wrong when fetching blogpost.");
  }
}
function showComments(result) {
  comments.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    const date = new Date(result[i].date);
    const comment = `<li><div class="comment-box"><div class="name-date"><div><strong>${
      result[i].author_name
    }</strong></div><div class="date-post">${date.toLocaleDateString()}</div></div><div>${
      result[i].content.rendered
    }</div></div></li>`;
    comments.innerHTML += comment;
  }
}
form.onsubmit = function (event) {
  event.preventDefault();

  const name = nameInput.value;
  console.log(name);
  const email = emailInput.value;
  console.log(email);
  const message = messageInput.value;
  console.log(message);

  const data = JSON.stringify({
    post: id,
    author_name: name,
    author_email: email,
    content: message,
  });
  fetch("https://traveller-api.lindaas.net/wp-json/wp/v2/comments", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      console.log(response);
      if (response.ok === true) {
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        getComments();
      }

      return response.json();
    })
    .catch(() => {
      const errorText = `Something went wrong with comments`;
      errorComment.innerHTML = errorText;
    });
};

getComments();

error.innerText = "";
getPost();
