const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/76";
const about = document.querySelector(".about");

async function getAboutPage() {
  const response = await fetch(url);
  const result = await response.json();

  showAboutPage(result);
}

function showAboutPage(home) {
  about.innerHTML = home.content.rendered;
}
async function showFeaturedImage() {
  const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/76?_embed";

  const featuredImage = document.querySelector(".image-header");

  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  featuredImage.style.backgroundImage = `url(${result._embedded["wp:featuredmedia"]["0"].source_url})`;
}
showFeaturedImage();
getAboutPage();
