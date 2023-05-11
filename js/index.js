const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/35";
const homePage = document.querySelector(".home-page");

async function getHomePage() {
  const response = await fetch(url);
  const result = await response.json();

  showHomePage(result);
}

function showHomePage(home) {
  homePage.innerHTML = home.content.rendered;
}

async function showFeaturedImage() {
  const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/35?_embed";

  const feaImage = document.querySelector(".image-header");

  const response = await fetch(url);
  const result = await response.json();

  feaImage.style.backgroundImage = `url(${result._embedded["wp:featuredmedia"]["0"].source_url})`;
}
showFeaturedImage();
getHomePage();
