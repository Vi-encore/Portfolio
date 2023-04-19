// localStorage.clear();

document.addEventListener("DOMContentLoaded", () => {
  let visitCount = localStorage.getItem("visitCount");

  visitCount === null ? (visitCount = 1) : visitCount++;
  console.log(`You visited ${visitCount} times`);

  localStorage.setItem("visitCount", visitCount);
});
