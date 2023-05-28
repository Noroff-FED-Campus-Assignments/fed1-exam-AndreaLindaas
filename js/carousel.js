const slidesContainer = document.querySelector("#slides-container");
let slide;
const prevButton = document.querySelector("#slide-arrow-prev");
const nextButton = document.querySelector("#slide-arrow-next");

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
  try {
    const response = await fetch(url2);
    const result = await response.json();
    showPosts(result);
  } catch (e) {
    showErrorMessage("Something went wrong when fetching carousel.");
  }
}

function showPosts(blogposts) {
  for (let i = 0; i < blogposts.length; i++) {
    const date = new Date(blogposts[i].date);
    const postMonth = month[date.getMonth()];
    const postDate = date.getDate();
    const postYear = date.getFullYear();
    const title = `<li class="slide"><div style="background-image: url(${blogposts[i]._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium_large.source_url})">
    <a href="blogpost.html?id=${blogposts[i].id}"><div class="date"><div class="month">${postMonth}</div><div class="day">${postDate}</div><div class="year">${postYear}</div></div><div class="card-title"><p>${blogposts[i].title.rendered}</p></div>
    </a></div></li>`;
    slidesContainer.innerHTML += title;
  }
  slide = document.querySelector(".slide");
}
error.innerText = "";
getPosts();
