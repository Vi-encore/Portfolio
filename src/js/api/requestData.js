async function getInfo() {
  let url = "https://my-json-server.typicode.com/Vi-encore/test/projects";
  let response = await fetch(url)
    .then((response) => response.json())
    .then((json) => createCards(json));
}

function createCards(response) {
  const cardCards = document.querySelector(".work__cards");
  let result = "";

  response.forEach((res) => {
    let { hostingURL, imgURL, repositoryURL } = res;
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
      <h5 class="work__card--name">Calculator</h5>
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

// window.onload(getInfo());
