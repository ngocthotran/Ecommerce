document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".slide").length;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  // Add click event listeners
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
});
