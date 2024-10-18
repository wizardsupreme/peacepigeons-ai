// JavaScript to toggle shrinking header on scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
  