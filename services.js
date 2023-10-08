const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  const translateX = -currentIndex * 100 + "%";
  slider.style.transform = `translateX(${translateX})`;
}

// Initial setup
updateSlider();
