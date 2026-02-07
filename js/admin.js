const ADMIN_USER = "admin";
const ADMIN_PASS = "12345"; // change this

function adminLogin() {
  const u = document.getElementById("adminUser").value;
  const p = document.getElementById("adminPass").value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong admin credentials");
  }
}

if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "admin.html";
  }
}

function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "index.html";
}
