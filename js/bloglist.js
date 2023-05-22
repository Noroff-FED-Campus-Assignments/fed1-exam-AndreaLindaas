let page = 1;
let totalPages = 1;
const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed&per_page=9&page=";
const filterUrl =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed&per_page=100&page=";
const blogpostHtml = document.querySelector(".posts");
const sortHtml = document.querySelector("#sort");
const filterHtml = document.querySelector("#filter");
const ldsRing = document.querySelector(".lds-ring");
let blogposts = [];
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

async function getBlogPosts() {
  try {
    const response = await fetch(url + page);
    totalPages = response.headers.get("x-wp-totalpages");
    const result = await response.json();
    blogposts = result;
    showBlogPosts();
  } catch (e) {
    console.error(e);
    showErrorMessage("Something went wrong when fetching Archive.");
  }
}

async function getAllBlogPosts() {
  const response = await fetch(filterUrl + page);
  const result = await response.json();
  blogposts = result;
  showBlogPosts();
}

function showBlogPosts() {
  sortBlogPosts();
  ldsRing.style.display = "none";
  for (let i = 0; i < blogposts.length; i++) {
    const date = new Date(blogposts[i].date);
    const postMonth = month[date.getMonth()];
    const postDate = date.getDate();
    const postYear = date.getFullYear();
    if (filterHtml.value == "default") {
      const title = `<li><a href="blogpost.html?id=${blogposts[i].id}"><div class="card"><div class="date"><div class="month">${postMonth}</div><div class="day">${postDate}</div><div class="year">${postYear}</div></div><img src="${blogposts[i]._embedded["wp:featuredmedia"]["0"].media_details.sizes.large.source_url}" alt="${blogposts[i]._embedded["wp:featuredmedia"]["0"].alt_text}" class="featured-image"/><div class="card-title">${blogposts[i].title.rendered}</div></div></a></li>`;
      blogpostHtml.innerHTML += title;
    } else if (filterHtml.value == postYear) {
      const title = `<li><a href="blogpost.html?id=${blogposts[i].id}"><div class="card"><div class="date"><div class="month">${postMonth}</div><div class="day">${postDate}</div><div class="year">${postYear}</div></div><img src="${blogposts[i]._embedded["wp:featuredmedia"]["0"].media_details.sizes.large.source_url}" alt="${blogposts[i]._embedded["wp:featuredmedia"]["0"].alt_text}" class="featured-image"/><div class="card-title">${blogposts[i].title.rendered}</div></div></a></li>`;
      blogpostHtml.innerHTML += title;
    }
  }
}

function seeMorePosts() {
  page = page + 1;
  getBlogPosts();
  if (totalPages == page) {
    document.querySelector(".button-container .see-more").style.display =
      "none";
  }
}
function sortBlogPosts() {
  let sort = sortHtml.value;

  if (sort === "asc") {
    blogposts = blogposts.sort(compare);
  } else if (sort === "desc") {
    blogposts = blogposts.sort(compare);
    blogposts = blogposts.reverse();
  }
}
sortHtml.onchange = function () {
  blogpostHtml.innerHTML = "";
  showBlogPosts();
};
filterHtml.onchange = function () {
  blogpostHtml.innerHTML = "";
  getAllBlogPosts();
};

error.innerText = "";
getBlogPosts();

//borrowed from the internet (stackoverflow)
function compare(a, b) {
  if (a.title.rendered < b.title.rendered) {
    return -1;
  }
  if (a.title.rendered > b.title.rendered) {
    return 1;
  }
  return 0;
}
