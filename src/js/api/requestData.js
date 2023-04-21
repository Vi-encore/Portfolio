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
