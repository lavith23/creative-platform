const grid = document.getElementById("cardGrid");

const title = localStorage.getItem("siteTitle");
if (title) {
  document.getElementById("siteTitle").innerText = title;
}

const defaultCards = [
  { title: "Portfolio Website", desc: "Show your work" },
  { title: "Business Website", desc: "Grow your business" }
];

const cards = JSON.parse(localStorage.getItem("cards")) || defaultCards;

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${card.title}</h3><p>${card.desc}</p>`;
  grid.appendChild(div);
});
