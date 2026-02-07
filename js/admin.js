function updateTitle() {
  const title = document.getElementById("siteTitleInput").value;
  localStorage.setItem("siteTitle", title);
  alert("Title updated! Refresh homepage.");
}

function addCard() {
  const title = document.getElementById("cardTitle").value;
  const desc = document.getElementById("cardDesc").value;

  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push({ title, desc });

  localStorage.setItem("cards", JSON.stringify(cards));
  alert("Card added! Refresh homepage.");
}

function deleteCard() {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.pop();
  localStorage.setItem("cards", JSON.stringify(cards));
  alert("Last card deleted! Refresh homepage.");
}
