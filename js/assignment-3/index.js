const imageWrapper = document.querySelector(".carousel-image-wrapper");
const carouselContainer = document.querySelector(".carousel-container");
let indicatorDiv = document.createElement("div");
indicatorDiv.setAttribute("class", "indicators");

//indicators
for (let i = 0; i < imageWrapper.children.length; i++) {
  let span = document.createElement("span");
  let content = document.createTextNode(i + 1);
  span.appendChild(content);
  indicatorDiv.appendChild(span);
}

carouselContainer.appendChild(indicatorDiv);

//indicator span
let spans = document.querySelectorAll("span");

for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", () => {
    slideTo(i);
  });
}

let prevButton = document.createElement("i");
prevButton.setAttribute("class", "ri-arrow-left-s-line prevBtn");
let nextButton = document.createElement("i");
nextButton.setAttribute("class", "ri-arrow-right-s-line nextBtn");

carouselContainer.appendChild(prevButton);
carouselContainer.appendChild(nextButton);

let slideIndex = 0;
let direction = 1;
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");
const images = document.querySelectorAll("img");

//next button action
next.addEventListener("click", function () {
  slideIndex += direction;
  spans[slideIndex - 1].classList.remove("active");
  spans[slideIndex].classList.add("active");
  imageWrapper.style.transform = "translateX(-" + slideIndex * 500 + "px)";

  console.log(slideIndex);
});

//prev button
prev.addEventListener("click", function () {
  slideIndex -= direction;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }
  imageWrapper.style.transform = "translateX(-" + slideIndex * 500 + "px)";
  console.log(slideIndex);
});

//indicator button

function slideTo(index) {
  slideIndex = index;
  imageWrapper.style.transform = "translateX(-" + index * 500 + "px)";
}

//slide after 2seconds
function startSlider() {
  setInterval(function () {
    if (slideIndex === images.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    imageWrapper.style.transform = "translateX(-" + slideIndex * 500 + "px)";
  }, 3000);
}
startSlider();
