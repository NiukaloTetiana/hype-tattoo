(() => {
  const mobileMenu = document.querySelector(".js-menu");
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
