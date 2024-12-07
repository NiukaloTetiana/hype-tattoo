import throttle from "lodash.throttle";

const artistList = document.querySelector(".js-artist__slider--list");
const artistIndicatorList = document.querySelector(".js-artist__list");
const artisListButton = document.querySelector(".js-artist__list--button");
const prevBtn = document.querySelector(".js-artist__button-prev");
const nextBtn = document.querySelector(".js-artist__button-next");

const slidesCount = artistList.children.length;
let slideWidth = 0;
let listWidth = 0;
let activeIndex = 0;

const breakpoints = [
  { max: 374.98, slideWidth: 298, gap: 36 },
  { max: 767.98, slideWidth: 350, gap: 36 },
  { max: 1399.98, slideWidth: 732, gap: 64 },
  { max: 1919.98, slideWidth: 1360, gap: 64 },
  { max: Infinity, slideWidth: 1804, gap: 64 },
];

const updateSlideWidth = () => {
  const currentBreakpoint =
    breakpoints.find((bp) => window.innerWidth <= bp.max) || {};

  const { slideWidth: width, gap } = currentBreakpoint;
  slideWidth = width;
  listWidth = slideWidth * slidesCount + gap;

  updateTransform();
  updateActiveIndicator();
};

const updateActiveIndicator = () => {
  const artistItems = artistIndicatorList.querySelectorAll(".js-artist__item");

  artistItems.forEach((item, index) =>
    item.classList.toggle("artist__color--accent", index === activeIndex)
  );

  const translateX = `${activeIndex * 64}px`;
  artisListButton.style.setProperty("--after-translate-x", translateX);
};

const updateTransform = () => {
  artistList.style.width = `${listWidth}px`;
  artistList.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
};

const changeSlide = (direction) => {
  const nextIndex = activeIndex + direction;

  if (nextIndex >= 0 && nextIndex < slidesCount) {
    activeIndex = nextIndex;
    updateTransform();
    updateActiveIndicator();
  }
};

prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));

window.addEventListener("resize", throttle(updateSlideWidth, 500));
updateSlideWidth();
