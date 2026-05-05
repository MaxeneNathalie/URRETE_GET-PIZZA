const toggleBtn = document.getElementById("toggleBtn");
const headerNav = document.querySelector(".headerNav ul");

toggleBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

document.querySelectorAll(".headerNav a").forEach((link) => {
  link.addEventListener("click", () => {
    headerNav.classList.remove("active");
  });
});
