const hamburguer = document.querySelector("#hamburguer");
const nav = document.querySelector(".header-indent");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
});