const slidesContainer = document.querySelector("#slides-container");
let slide;
const prevButton = document.querySelector("#slide-arrow-prev");
const nextButton = document.querySelector("#slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

async function getPosts() {
  const url2 = "https://traveller-api.lindaas.net/wp-json/wp/v2/posts?_embed";

  const response = await fetch(url2);
  const result = await response.json();
  console.log(result);
  showPosts(result);
}

function showPosts(blogposts) {
  for (let i = 0; i < blogposts.length; i++) {
    console.log(blogposts[i].title.rendered);

    const title = `<li class="slide" style="background-image: url(${blogposts[i]._embedded["wp:featuredmedia"]["0"].source_url})">
    <a href="blogpost.html?id=${blogposts[i].id}"><div class="card-title"><p>${blogposts[i].title.rendered}</p></div>
    </a></li>`;
    slidesContainer.innerHTML += title;
  }
  slide = document.querySelector(".slide");
}
getPosts();
