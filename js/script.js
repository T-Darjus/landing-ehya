"use strict";

const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
let navList = document.querySelector(".header__nav-list");

btnOpen.addEventListener("click", function (e) {
  e.preventDefault;
  classToggle();
});
btnClose.addEventListener("click", function (e) {
  e.preventDefault;
  classToggle();
});

function classToggle() {
  navList.classList.toggle("nav-move");
  btnOpen.classList.toggle("hide-btn");
  btnClose.classList.toggle("hidden");
}

//random reviews
const reviews = [
  {
    id: 1,
    name: "Jaquon Hart",
    job: "Digital Marketing Executive, Hypebeast",
    img: "img/testimonials/photo-1.png",
    text: "With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    img: "img/testimonials/photo-2.png",
    text: " Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth.Glossier tattooed 8-bit, fixie waistcoat.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img: "img/testimonials/photo-3.png",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat.Glossier tattooed 8-bit, fixie waistcoat.",
  },
];

const testimonialText = document.querySelector(".testimonial-text");
const authorPhoto = document.querySelector(".author-photo");
const authorName = document.querySelector(".author-name");
const authorJob = document.querySelector(".author-work");

const slideLeft = document.querySelector(".slider__btn--left");
const slideRight = document.querySelector(".slider__btn--right");

const dots = document.querySelectorAll(".dots__dot");

let currentReview = 0;

slideRight.addEventListener("click", function (e) {
  e.preventDefault;
  currentReview++;
  if (currentReview >= reviews.length) {
    currentReview = 0;
  }
  console.log(currentReview);
  reviewSlide();
});

slideLeft.addEventListener("click", function (e) {
  e.preventDefault;
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  console.log(currentReview);
  reviewSlide();
});

function reviewSlide() {
  testimonialText.textContent = reviews[currentReview].text;
  authorPhoto.src = reviews[currentReview].img;
  authorName.textContent = reviews[currentReview].name;
  authorJob.textContent = reviews[currentReview].job;
  dots.forEach((item) => item.classList.remove("dot--active"));
  dots[currentReview].classList.add("dot--active");
}
