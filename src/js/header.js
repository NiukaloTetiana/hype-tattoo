import throttle from "lodash.throttle";

(() => {
  const mobileMenu = document.querySelector(".js-backdrop");
  const openMenuBtn = document.querySelector(".js-menu__open");
  const closeMenuBtn = document.querySelector(".js-menu__close");
  const navLinks = document.querySelectorAll(".menu__link");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  navLinks.forEach((navLink) => navLink.addEventListener("click", toggleMenu));
})();

const headerContainer = document.querySelector("header");

const handleScroll = () => {
  if (window.scrollY > 0) {
    headerContainer.classList.add("header__shadow");
  } else {
    headerContainer.classList.remove("header__shadow");
  }
};

window.addEventListener("load", () => {
  handleScroll();
});

window.addEventListener("scroll", throttle(handleScroll, 900));
