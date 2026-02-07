function saveTitle() {
  const title = document.getElementById("titleInput").value;
  localStorage.setItem("siteTitle", title);
  alert("Title updated");
}

function addCard() {
  const title = document.getElementById("cardTitle").value;
  const desc = document.getElementById("cardDesc").value;

  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push({ title, desc });
  localStorage.setItem("cards", JSON.stringify(cards));

  alert("Card added");
}

function removeCard() {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.pop();
  localStorage.setItem("cards", JSON.stringify(cards));

  alert("Last card removed");
}

