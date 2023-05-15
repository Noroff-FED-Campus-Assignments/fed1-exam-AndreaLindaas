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
  titleName(result);
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
}
function titleName(blogpost) {
  console.log(blogpost);
  document.title = `${blogpost.title.rendered}`;
  document.querySelector(".title").innerHTML = document.title;
}
getPost();
