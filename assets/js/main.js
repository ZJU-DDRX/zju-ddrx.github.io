const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const slides = Array.from(document.querySelectorAll(".life-slideshow img"));

if (slides.length > 1) {
  let activeSlide = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (activeSlide < 0) {
    activeSlide = 0;
    slides[activeSlide].classList.add("is-active");
  }

  window.setInterval(() => {
    slides[activeSlide].classList.remove("is-active");
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add("is-active");
  }, 3600);
}
