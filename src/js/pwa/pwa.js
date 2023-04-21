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
