let page = 1;
let totalPages = 1;
const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed&per_page=9&page=";
const blogpostHtml = document.querySelector(".posts");
const sortHtml = document.querySelector("#sort");
const filterHtml = document.querySelector("#filter");
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

function showBlogPosts() {
  sortBlogPosts();

  for (let i = 0; i < blogposts.length; i++) {
    //if: (filterHtml.value == "default"){
    //vanlige koden under.
    // }else{ const year = filterHtml.value}{
    /*if (postYear == year){

        }
    //}*/

    const date = new Date(blogposts[i].date);
    const postMonth = month[date.getMonth()];
    const postDate = date.getDate();
    const postYear = date.getFullYear();
    const title = `<li><a href="blogpost.html?id=${blogposts[i].id}"><div class="card"><div class="date"><div class="month">${postMonth}</div><div class="day">${postDate}</div><div class="year">${postYear}</div></div><img src="${blogposts[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogposts[i]._embedded["wp:featuredmedia"]["0"].alt_text}" class="featured-image"/><div class="card-title">${blogposts[i].title.rendered}</div></div></a></li>`;
    blogpostHtml.innerHTML += title;
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
