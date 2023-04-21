/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/api/requestData.js":
/*!*******************************!*\
  !*** ./js/api/requestData.js ***!
  \*******************************/
/***/ (() => {

async function getInfo() {
  let url = "https://my-json-server.typicode.com/Vi-encore/test/projects";
  let response = await fetch(url)
    .then((response) => response.json())
    .then((json) => createCards(json))
    .catch((error) => createNoInternet(error));
}

function createCards(response) {
  const cardCards = document.querySelector(".work__cards");
  let result = "";

  response.forEach((res) => {
    let { hostingURL, imgURL, repositoryURL, name } = res;
    let card = `<div
    class="work__card carousel-item"
    data-bs-interval="10000"
  >
    <a
      href="${hostingURL}"
      class="work__card-link"
      target="_blank"
    >
      <img
        src="${imgURL}"
        class="d-block w-100 work__card--img"
        alt="..."
      />
    </a>
    <div
      class="carousel-caption d-none d-md-block work__card--info"
    >
      <h5 class="work__card--name">${name}</h5>
      <a
        href="${repositoryURL}"
        target="blank"
        class="work__card--github"
        >Repository
      </a>
    </div>
  </div>`;

    result += card;
  });

  cardCards.innerHTML = result;
  let firstCard = document.querySelector(".work__card");
  firstCard.classList.add("active");
}

window.addEventListener("load", () => {
  getInfo();
});

function createNoInternet(error) {
  const cardCards = document.querySelector(".work__cards");
  let result = "";

  result = `<div class="work__card carousel-item active" data-bs-interval="10000">
  <a href="https://calculator-training.netlify.app/" class="work__card-link" target="_blank">
    <img src="./img/calculator.png" class="d-block w-100 work__card--img" alt="...">
  </a>
  <div class="carousel-caption d-none d-md-block work__card--info">
    <h5 class="work__card--name">Calculator</h5>
    <a href="https://github.com/Vi-encore/Calculator-training" target="blank" class="work__card--github">Repository
    </a>
  </div>
</div>
<div class="work__card carousel-item" data-bs-interval="10000">
  <a href="https://vi-encore.github.io/JS-File-Uploader/" class="work__card-link" target="_blank">
    <img src="./img/JS-Download.png" class="d-block w-100 work__card--img" alt="...">
  </a>
  <div class="carousel-caption d-none d-md-block work__card--info">
    <h5 class="work__card--name">JS Uploader</h5>
    <a href="https://github.com/Vi-encore/JS-File-Uploader" target="blank" class="work__card--github">Repository
    </a>
  </div>
</div>
<div class="work__card carousel-item" data-bs-interval="10000">
  <a href="https://vi-encore.github.io/ITEA-Course-Work-1/" class="work__card-link" target="_blank">
    <img src="./img/landing.png" class="d-block w-100 work__card--img" alt="...">
  </a>
  <div class="carousel-caption d-none d-md-block work__card--info">
    <h5 class="work__card--name">Landing page</h5>
    <a href="https://github.com/Vi-encore/ITEA-Course-Work-1" target="blank" class="work__card--github">Repository
    </a>
  </div>
</div>`;

  cardCards.innerHTML = result;
}


/***/ }),

/***/ "./js/loadUsers/loadUsers.js":
/*!***********************************!*\
  !*** ./js/loadUsers/loadUsers.js ***!
  \***********************************/
/***/ (() => {

// localStorage.clear();

document.addEventListener("DOMContentLoaded", () => {
  let visitCount = localStorage.getItem("visitCount");

  visitCount === null ? (visitCount = 1) : visitCount++;
  visitCount === 1
    ? console.log(`You visited ${visitCount} time`)
    : console.log(`You visited ${visitCount} times`);

  localStorage.setItem("visitCount", visitCount);

  localStorage.setItem("start", performance.now());
  let timeAll = Math.round(
    localStorage.getItem("end") - localStorage.getItem("start")
  );

  let timeSpent = localStorage.getItem("timeSpent");
  timeSpent === null
    ? (timeSpent = timeAll)
    : (timeSpent = parseInt(timeSpent) + timeAll);

  visitCount !== 1 && timeMath(timeSpent);
  localStorage.setItem("timeSpent", timeSpent);
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("end", performance.now());
});

function timeMath(time) {
  let s = Math.round(time / 1000);
  let min = Math.round(s / 60);
  let hours = Math.round(min / 60);

  let visits = localStorage.getItem("visitCount");

  //обчислити скільки часу людина провела на сайті загалом
  time < 1000
    ? console.log(`You spend total 1 second here in total`)
    : time < 60000
    ? console.log(`You spend total ${s} seconds here in total`)
    : time < 3600000
    ? min === 1
      ? console.log(`You spend total ${min} minute here in total`)
      : console.log(`You spend total ${min} minutes here in total`)
    : hours === 1
    ? console.log(`You spend total ${hours} hour here in total`)
    : console.log(`You spend ${hours} hours here in total`);

  //обчислити, скільки часу людина провела в середньому за один візит

  let average = Math.round(time / visits);
  let averS = Math.round(average / 1000);
  let averMin = Math.round(averS / 60);
  let averHour = Math.round(averMin / 60);

  average < 1000
    ? console.log(`You spend 1 second here on average`)
    : average < 60000
    ? console.log(`You spend ${averS} seconds here on average`)
    : average < 3600000
    ? averMin === 1
      ? console.log(`You spend ${averMin} minute here on average`)
      : console.log(`You spend ${averMin} minutes here on average`)
    : averHour === 1
    ? console.log(`You spend ${averHour} hour here on average`)
    : console.log(`You spend ${averHour} hours here on average`);
}


/***/ }),

/***/ "./js/pwa/pwa.js":
/*!***********************!*\
  !*** ./js/pwa/pwa.js ***!
  \***********************/
/***/ (() => {

if ("serviceWorker" in navigator) {
  //   console.log(true);
  window.addEventListener("load", function () {
    // console.log(this.navigator.serviceWorker);
    navigator.serviceWorker
      .register("./sw.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   console.log(navigator);
// });


/***/ }),

/***/ "./js/theme/changeTheme.js":
/*!*********************************!*\
  !*** ./js/theme/changeTheme.js ***!
  \*********************************/
/***/ (() => {

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/style */ "./scss/style.scss");
/* harmony import */ var _theme_changeTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/changeTheme */ "./js/theme/changeTheme.js");
/* harmony import */ var _theme_changeTheme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_changeTheme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_requestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/requestData */ "./js/api/requestData.js");
/* harmony import */ var _api_requestData__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_requestData__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadUsers_loadUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadUsers/loadUsers */ "./js/loadUsers/loadUsers.js");
/* harmony import */ var _loadUsers_loadUsers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadUsers_loadUsers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pwa_pwa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pwa/pwa */ "./js/pwa/pwa.js");
/* harmony import */ var _pwa_pwa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pwa_pwa__WEBPACK_IMPORTED_MODULE_4__);






// import "../sw";

})();

/******/ })()
;