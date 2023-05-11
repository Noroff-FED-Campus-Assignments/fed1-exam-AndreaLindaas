const url =
  "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed&per_page=10";
const blogpostHtml = document.querySelector(".posts");

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

    const title = `<li><a href="blogpost.html?id=${blogposts[i].id}"><div class="card"><img src="${blogposts[i]._embedded["wp:featuredmedia"]["0"].source_url}" class="featured-image"/><div>${blogposts[i].title.rendered}</div></div></a></li>`;
    blogpostHtml.innerHTML += title;
  }
}
