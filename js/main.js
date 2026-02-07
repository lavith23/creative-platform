const defaultCards = [
  { title: "Portfolio Website", desc: "Show your personal work" },
  { title: "Business Website", desc: "Company presentation" },
  { title: "Landing Page", desc: "Marketing & ads" }
];

// Load title
const title = localStorage.getItem("siteTitle");
if (title) {
  document.getElementById("siteTitle").innerText = title;
}

// Load cards
const grid = document.getElementById("cardGrid");
const cards = JSON.parse(localStorage.getItem("cards")) || defaultCards;

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${card.title}</h3><p>${card.desc}</p>`;
  grid.appendChild(div);
});
