const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts/" + id + "?_embed";

const post = document.querySelector(".post");
const featuredImage = document.querySelector(".image-header");
const headline = document.querySelector(".headline");

async function getPost() {
  const response = await fetch(url);
  const result = await response.json();
  showHeadline(result);
  showFeaturedImage(result);
  showPost(result);
}

function showFeaturedImage(image) {
  console.log("jgyf", image._embedded["wp:featuredmedia"]["0"].source_url);
  featuredImage.style.backgroundImage = `url(${image._embedded["wp:featuredmedia"]["0"].source_url})`;
}
function showHeadline(blogpost) {
  //console.log(blogpost.title);
  headline.innerHTML = blogpost.title.rendered;
}
function showPost(blogpost) {
  //   console.log(blogpost);
  post.innerHTML = blogpost.content.rendered;
}

getPost();
