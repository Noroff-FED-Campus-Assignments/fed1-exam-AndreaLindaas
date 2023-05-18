const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts/" + id + "?_embed";

const post = document.querySelector(".post");
const featuredImage = document.querySelector(".image-header");
const headline = document.querySelector(".headline");
const modalShadow = document.querySelector(".modal-shadow");

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
  featuredImage.style.backgroundImage = `url(${image._embedded["wp:featuredmedia"]["0"].source_url})`;
}
function showHeadline(blogpost) {
  //console.log(blogpost.title);
  headline.innerHTML = blogpost.title.rendered;
}
function showPost(blogpost) {
  //   console.log(blogpost);
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
  console.log("hei");
  modalShadow.classList.remove("modal-active");
  document.querySelector(".modal").classList.remove("modal");
};

error.innerText = "";
getPost();
