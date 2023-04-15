// let names = document.querySelectorAll(".work__card--name");
// let links = document.querySelectorAll(".work__card-link");

// let contactLogo = document.querySelectorAll(".contact__logo");
// let contactLink = document.querySelectorAll(".contact__link");

// // contactLogo.forEach((logo) => {
// //   logo.addEventListener("click", () => {
// //     contactLink.forEach((link) => {
// //       link.click();
// //     });
// //   });
// // });

const navItems = document.querySelectorAll(".nav__link"); //
const navBtnsTranslate = document.querySelectorAll(".nav__btn__translate"); //
const heropageHead = document.querySelector(".heropage__header"); //
const heropageText = document.querySelector(".heropage__text"); //
const sectionHeader = document.querySelectorAll(".section__header"); ////remove class from the last one
const sectionHeaderLast = document.querySelector(".contact__write"); //
const skillsInfoHead = document.querySelectorAll(".skills__info-head"); //
const skillsInfoText = document.querySelectorAll(".skills__info-text"); //
const skillsLogo = document.querySelectorAll(".skills__card--logo");

const body = document.querySelector(".container__all"); //
const skillsCards = document.querySelectorAll(".skills__card"); //
const navWrap = document.querySelector(".nav__wrapper"); //grad //

const jsLight = document.querySelector(".js-light");
const jsDark = document.querySelector(".js-dark");

///////////add icons on skills => white

jsDark.addEventListener("click", () => {
  skillsLogo.forEach((logo) => {
    logo.classList.add("light-text");
  });

  navItems.forEach((item) => {
    item.classList.add("light-text");
  });

  navBtnsTranslate.forEach((btn) => {
    btn.classList.add("light-text");
  });

  heropageHead.classList.add("light-text");

  heropageText.classList.add("light-text");

  sectionHeader.forEach((head) => {
    head.classList.add("light-text");
  });

  //   sectionHeaderLast.classList.remove("light-text");

  skillsInfoHead.forEach((head) => {
    head.classList.add("light-text");
  });

  skillsInfoText.forEach((text) => {
    text.classList.add("light-text");
  });

  body.classList.add("dark");

  skillsCards.forEach((card) => {
    card.classList.add("dark");
  });

  navWrap.classList.add("dark-nav");

  jsDark.classList.add("hidden");
  jsLight.classList.remove("hidden");
});

jsLight.addEventListener("click", () => {
  skillsLogo.forEach((logo) => {
    logo.classList.remove("light-text");
  });

  navItems.forEach((item) => {
    item.classList.remove("light-text");
  });

  navBtnsTranslate.forEach((btn) => {
    btn.classList.remove("light-text");
  });

  heropageHead.classList.remove("light-text");

  heropageText.classList.remove("light-text");

  sectionHeader.forEach((head) => {
    head.classList.remove("light-text");
  });

  //   sectionHeaderLast.classList.remove("light-text");

  skillsInfoHead.forEach((head) => {
    head.classList.remove("light-text");
  });

  skillsInfoText.forEach((text) => {
    text.classList.remove("light-text");
  });

  body.classList.remove("dark");

  skillsCards.forEach((card) => {
    card.classList.remove("dark");
  });

  navWrap.classList.remove("dark-nav");

  jsDark.classList.remove("hidden");
  jsLight.classList.add("hidden");
});
