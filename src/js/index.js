import "@scss/style";
// import { pitch } from "mini-css-extract-plugin/types/loader";
console.log("working");

// import "./img/imgList";

// async function getInfo() {
//   let url = "https://my-json-server.typicode.com/Vi-encore/test/projects";
//   let response = await fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// setTimeout(getInfo(), 1500);

//Назви змінних поки такі, бо зараз тільки тестую тут

let imgs = document.querySelectorAll(".work__card--img");
let links = document.querySelectorAll(".work__card-link");

let contactLogo = document.querySelectorAll(".contact__logo");
let contactLink = document.querySelectorAll(".contact__link");

imgs.forEach((photo) => {
  photo.addEventListener("click", () => {
    links.forEach((link) => {
      link.click();
    });
  });
});

contactLogo.forEach((logo) => {
  logo.addEventListener("click", () => {
    contactLink.forEach((link) => {
      link.click();
    });
  });
});
