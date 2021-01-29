const btn = document.getElementById("btn");
const navbar = document.getElementById("nav");

btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    btn.classList.toggle("active");
});
