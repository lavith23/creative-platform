function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // CHANGE THESE (YOUR SECRET)
  const adminUser = "admin";
  const adminPass = "12345";

  if (user === adminUser && pass === adminPass) {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Wrong username or password";
  }
}
