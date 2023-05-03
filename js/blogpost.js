const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed" + id;

const post = document.querySelector(".post");

async function getPost() {
  const response = await fetch(url);
  const result = await response.json();
  console.log("result");
}
