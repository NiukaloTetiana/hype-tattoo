const artistList = document.querySelector(".js-artist__slider--list");
const prevBtn = document.querySelector(".js-artist__button-prev");
const nextBtn = document.querySelector(".js-artist__button-next");

const slideWidth = 350;
const slidesCount = artistList.children.length;
let activeIndex = 0;

const updateTransform = () => {
  artistList.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
};

const changeSlide = (direction) => {
  activeIndex = (activeIndex + direction + slidesCount) % slidesCount;
  updateTransform();
};

prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));
