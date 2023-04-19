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
