const url = "https://traveller-api.lindaas.net/wp-json/wp/v2/pages/201";
const terms = document.querySelector(".terms");

async function getTermsPage() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    showTermsPage(result);
  } catch (e) {
    showErrorMessage(
      "Something went wrong when fetching Terms & conditions page."
    );
  }
}

function showTermsPage(term) {
  terms.innerHTML = term.content.rendered;
}
getTermsPage();
