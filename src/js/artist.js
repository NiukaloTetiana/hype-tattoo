import throttle from "lodash.throttle";

const artistList = document.querySelector(".js-artist__slider--list");
const artistIndicatorList = document.querySelector(".js-artist__list");
const artisListButton = document.querySelector(".js-artist__list--button");
const prevBtn = document.querySelector(".js-artist__button-prev");
const nextBtn = document.querySelector(".js-artist__button-next");

const breakpoints = [
  { max: 374.98, slideWidth: 298, gap: 36 },
  { max: 767.98, slideWidth: 350, gap: 36 },
  { max: 1439.98, slideWidth: 732, gap: 64 },
  { max: 1919.98, slideWidth: 1360, gap: 64 },
  { max: Infinity, slideWidth: 1804, gap: 64 },
];

let slideWidth = 0;
let listWidth = 0;
let activeIndex = 1;
let slidesCount = 0;
let isAnimating = false;

const cloneSlides = () => {
  const firstSlide = artistList.children[0];
  const lastSlide = artistList.children[artistList.children.length - 1];

  const firstClone = firstSlide.cloneNode(true);
  const lastClone = lastSlide.cloneNode(true);

  artistList.appendChild(firstClone);
  artistList.insertBefore(lastClone, artistList.firstChild);
};

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

  const realIndex =
    activeIndex === 0
      ? slidesCount - 3
      : activeIndex === slidesCount - 1
      ? 0
      : activeIndex - 1;

  artistItems.forEach((item, index) =>
    item.classList.toggle("artist__color--accent", index === realIndex)
  );

  const translateX = `${realIndex * 64}px`;
  artisListButton.style.setProperty("--after-translate-x", translateX);
};

const updateTransform = () => {
  artistList.style.width = `${listWidth}px`;
  artistList.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
};

const changeSlide = (direction) => {
  if (isAnimating) return;

  isAnimating = true;
  activeIndex += direction;

  artistList.style.transition = "transform 0.3s ease-in-out";
  updateTransform();
  updateActiveIndicator();
};

artistList.addEventListener("transitionend", () => {
  isAnimating = false;

  if (activeIndex === slidesCount - 1) {
    artistList.style.transition = "none";
    activeIndex = 1;
    updateTransform();
    setTimeout(() => {
      artistList.style.transition = "";
    });
  }

  if (activeIndex === 0) {
    artistList.style.transition = "none";
    activeIndex = slidesCount - 2;
    updateTransform();
    setTimeout(() => {
      artistList.style.transition = "";
    });
  }
});

prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));
window.addEventListener("resize", throttle(updateSlideWidth, 500));

cloneSlides();
slidesCount = artistList.children.length;
updateSlideWidth();
