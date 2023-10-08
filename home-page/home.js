const btnMenu = document.querySelector("#bars");
const header = document.querySelector("header")

btnMenu.addEventListener("click", () => {
  header.classList.toggle("active");
})
