const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/35";
const homePage = document.querySelector(".home-page");

async function getHomePage() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    showHomePage(result);
  } catch (e) {
    showErrorMessage("Something went wrong when fetching homepage.");
  }
}

function showHomePage(home) {
  homePage.innerHTML = home.content.rendered;
}

async function showFeaturedImage() {
  const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/35?_embed";

  const featuredImage = document.querySelector(".image-header");
  try {
    const response = await fetch(url);
    const result = await response.json();
    featuredImage.style.backgroundImage = `url(${result._embedded["wp:featuredmedia"]["0"].source_url})`;
  } catch (e) {
    showErrorMessage("Something went wrong when fetching image.");
  }
}

error.innerText = "";
showFeaturedImage();
getHomePage();
