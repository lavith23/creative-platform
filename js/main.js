const reveals = document.querySelectorAll(".reveal");

function revealOnLoad() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnLoad);
window.addEventListener("load", revealOnLoad);

