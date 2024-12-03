const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

const toggleScroll = (shouldBlock) => {
  document.body.style.overflow = shouldBlock ? "hidden" : "auto";
};

const updateModalContent = (contentKey, title) => {
  const icon = title.toLowerCase();

  const iconPath =
    process.env.NODE_ENV === "development"
      ? "./images/icons.svg#icon-"
      : "/assets/icons-CCWhYS4B.svg#icon-";

  const modalContentData = {
    proceed: `<div class="modal__title-wrapper">
      <h4 class="modal__title modal__nomargin">Your plan ${title}</h4>
      <svg class="modal__icon" width="54" height="54">
        <use href="${iconPath + icon}"></use>
      </svg>
    </div>
    <form class="modal__form" name="reviews-form">
      <div class="modal__input--wrapper">
        <input
          class="modal__form__input js-input"
          type="text"
          name="user-name"
          id="user-name"
          placeholder=" "
        />
        <label class="modal__form__label" for="user-name">Full Name</label>
      </div>
      <div class="modal__input--wrapper">
        <input
          class="modal__form__input"
          type="email"
          name="user-email"
          id="user-email"
          placeholder=" "
        />
        <label class="modal__form__label" for="user-name">E-mail</label>
      </div>
      <div class="modal__input--wrapper">
        <input
          class="modal__form__input"
          type="tel"
          name="user-phone"
          id="user-phone"
          placeholder=" "
        />
        <label class="modal__form__label" for="user-name">Phone number*</label>
      </div>

      <button class="modal__button" type="button" data-modal-open>
        <svg class="modal__button-icon-border">
          <use
            class="modal__button-icon-border-sm"
            href="${iconPath}package-btn-border-sm-black"
          ></use>
          <use
            class="modal__button-icon-border-lg"
            href="${iconPath}package-btn-border-lg-black"
          ></use>
        </svg>
        <span class="modal__button-text">Processed</span>
        <span class="modal__button-span-icon">
          <svg height="13" width="11">
            <use href="${iconPath}arrow-sideward"></use>
          </svg>
        </span>
      </button>
    </form>
    <p class="modal__text">
      By sending this form I confirm that I have read and accept the
      <span class="modal__text__span">Privacy Policy</span>
    </p>`,
    consultation: ` <h4 class="modal__title">Ask a question</h4>
    <form class="modal__form" name="reviews-form">
      <div class="modal__input--wrapper">
        <input
          class="modal__form__input js-input"
          type="text"
          name="user-name"
          id="user-name"
          placeholder=" "
        />
        <label class="modal__form__label" for="user-name">Full Name</label>
      </div>
      <div class="modal__input--wrapper">
        <input
          class="modal__form__input"
          type="email"
          name="user-email"
          id="user-email"
          placeholder=" "
        />
        <label class="modal__form__label" for="user-name">E-mail</label>
      </div>
      <div class="modal__input--wrapper">
        <input
          class="modal__form__input"
          type="tel"
          name="user-phone"
          id="user-phone"
          placeholder=" "
        />
        <label class="modal__form__label" for="user-name">Phone number*</label>
      </div>

      <button class="modal__button" type="button" data-modal-open>
        <svg class="modal__button-icon-border">
          <use
            class="modal__button-icon-border-sm"
            href="${iconPath}package-btn-border-sm-black"
          ></use>
          <use
            class="modal__button-icon-border-lg"
            href="${iconPath}package-btn-border-lg-black"
          ></use>
        </svg>
        <span class="modal__button-text">Consultation</span>
        <span class="modal__button-span-icon">
          <svg height="13" width="11">
            <use href="${iconPath}arrow-sideward"></use>
          </svg>
        </span>
      </button>
    </form>
    <p class="modal__text">
      By sending this form I confirm that I have read and accept the
      <span class="modal__text__span">Privacy Policy</span>
    </p>`,
  };

  const content = modalContentData[contentKey];
  modalContent.innerHTML = content;
};

const openModal = (contentKey, title) => {
  updateModalContent(contentKey, title);
  toggleScroll(true);
  modal.showModal();
};

const handleOpenModalClick = (event) => {
  const button = event.target.closest("[data-modal]");

  if (!button) return;

  const contentKey = button.getAttribute("data-modal");
  const title = button.getAttribute("data-title") || "";
  openModal(contentKey, title);
};

document.addEventListener("click", handleOpenModalClick);
modal.addEventListener("close", () => toggleScroll(false));
