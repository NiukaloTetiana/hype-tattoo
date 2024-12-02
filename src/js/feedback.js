const items = document.querySelectorAll(".js-feedback__list__item");
const prevBtn = document.querySelector(".js-feedback__button-prev");
const nextBtn = document.querySelector(".js-feedback__button-next");

let activeIndex = 0;

const updateSlider = () => {
  items.forEach((item, index) => {
    item.classList.remove("active", "behind");

    if (index === activeIndex) {
      item.classList.add("active");
    } else {
      item.classList.add("behind");
    }
  });
};

prevBtn.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + items.length) % items.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  activeIndex = (activeIndex + 1 + items.length) % items.length;
  updateSlider();
});
