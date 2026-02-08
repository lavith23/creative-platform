// SECURITY
if (localStorage.getItem("isAdmin") !== "true") {
  window.location.href = "admin.html";
}

// LOAD CARDS
let cards = JSON.parse(localStorage.getItem("cards")) || [];
renderCards();

// UPDATE TITLE
function updateTitle() {
  const title = document.getElementById("siteTitleInput").value;
  localStorage.setItem("siteTitle", title);
  alert("Title updated");
}

// ADD CARD
function addCard() {
  const title = document.getElementById("cardTitle").value;
  const desc = document.getElementById("cardDesc").value;

  if (!title || !desc) return alert("Fill all fields");

  cards.push({ title, desc });
  localStorage.setItem("cards", JSON.stringify(cards));

  renderCards();
}

// RENDER CARDS
function renderCards() {
  const list = document.getElementById("cardList");
  list.innerHTML = "";

  cards.forEach((card, index) => {
    list.innerHTML += `
      <div class="admin-card">
        <b>${card.title}</b>
        <p>${card.desc}</p>
        <button onclick="deleteCard(${index})">Delete</button>
      </div>
    `;
  });
}

// DELETE CARD
function deleteCard(index) {
  cards.splice(index, 1);
  localStorage.setItem("cards", JSON.stringify(cards));
  renderCards();
}

// LOGOUT
function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "admin.html";
}
