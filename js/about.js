const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/76";
const about = document.querySelector(".about");
const ldsRing = document.querySelector(".lds-ring");
async function getAboutPage() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    showAboutPage(result);
  } catch (e) {
    showErrorMessage("Something went wrong when fetching about page.");
  }
}

function showAboutPage(home) {
  ldsRing.style.display = "none";
  about.innerHTML = home.content.rendered;
}

async function showFeaturedImage() {
  const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/76?_embed";

  const featuredImage = document.querySelector(".image-header");
  try {
    const response = await fetch(url);
    const result = await response.json();
    featuredImage.style.backgroundImage = `url(${result._embedded["wp:featuredmedia"]["0"].media_details.sizes["1536x1536"].source_url})`;
  } catch (e) {
    showErrorMessage("Something went wrong when fetching image.");
  }
}
error.innerText = "";
showFeaturedImage();
getAboutPage();
