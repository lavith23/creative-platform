// Default data (first time)
const defaultData = {
  title: "Creative Platform",
  cards: [
    { title: "Portfolio Website", desc: "Professional layouts." },
    { title: "Business Website", desc: "Corporate & company sites." },
    { title: "Blog Website", desc: "Popular article sites." }
  ]
};

// Load data
let siteData = JSON.parse(localStorage.getItem("siteData")) || defaultData;

// Set title
document.getElementById("siteTitle").innerText = siteData.title;
document.getElementById("heroTitle").innerText = siteData.title;

// Load cards
const container = document.getElementById("cardContainer");
container.innerHTML = "";

siteData.cards.forEach(card => {
  container.innerHTML += `
    <div class="card">
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
      <button>View Demo</button>
    </div>
  `;
});
