import throttle from "lodash.throttle";

import "./header";
import "./artist";
import "./feedback";
import "./modal";

// -----------------ScrollUp Button----------------------
const scrollUpButton = document.querySelector(".js-scroll-up-btn");

const threshold = 300;

document.addEventListener(
  "scroll",
  throttle(() => {
    if (window.scrollY > threshold) {
      scrollUpButton.classList.add("show");
    } else {
      scrollUpButton.classList.remove("show");
    }
  }, 500)
);

scrollUpButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
