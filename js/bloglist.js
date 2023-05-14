const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed&per_page=10";
const blogpostHtml = document.querySelector(".posts");
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
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  showBlogPosts(result);
}
getBlogPosts();

function showBlogPosts(blogposts) {
  for (let i = 0; i < blogposts.length; i++) {
    console.log(blogposts[i].title.rendered);
    const date = new Date(blogposts[i].date);
    const postMonth = month[date.getMonth()];
    const postDate = date.getDate();
    const postYear = date.getFullYear();
    const title = `<li><a href="blogpost.html?id=${blogposts[i].id}"><div class="date"><div class="month">${postMonth}</div><div class="day">${postDate}</div><div class="year">${postYear}</div></div><div class="card"><img src="${blogposts[i]._embedded["wp:featuredmedia"]["0"].source_url}" class="featured-image"/><div>${blogposts[i].title.rendered}</div></div></a></li>`;
    blogpostHtml.innerHTML += title;
  }
}
