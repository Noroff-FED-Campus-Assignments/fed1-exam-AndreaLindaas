const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed&search=";
const searchInput = document.querySelector(".search-input");
const resultsHTML = document.querySelector(".results ul");
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function performSearch() {
  let searchWord = searchInput.value;
  fetchData(url + searchWord);
}

async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();

  showSearchResults(result);
}
function showSearchResults(result) {
  resultsHTML.innerHTML = "";
  document.querySelector(
    ".results p"
  ).innerHTML = `Showing ${result.length} results`;
  for (let i = 0; i < result.length; i++) {
    const date = new Date(result[i].date);
    const postMonth = month[date.getMonth()];
    const postDate = date.getDate();
    const postYear = date.getFullYear();
    const title = `<li><a href="blogpost.html?id=${result[i].id}"><div class="card"><div class="date"><div class="month">${postMonth}</div><div class="day">${postDate}</div><div class="year">${postYear}</div></div><img src="${result[i]._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium_large.source_url}" alt="${result[i]._embedded["wp:featuredmedia"]["0"].alt_text}" class="featured-image"/><div class="card-title">${result[i].title.rendered}</div></div></a></li>`;
    resultsHTML.innerHTML += title;
  }
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchword = params.get("searchword");

searchInput.value = searchword;
if (searchword) {
  performSearch();
}
