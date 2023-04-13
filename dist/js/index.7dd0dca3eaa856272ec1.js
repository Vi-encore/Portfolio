/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/style */ "./scss/style.scss");

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

})();

/******/ })()
;