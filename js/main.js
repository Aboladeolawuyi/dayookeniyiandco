document.addEventListener("DOMContentLoaded", () => {
  console.log("Dayo Okeniyi & Co. website loaded successfully");
});
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);
