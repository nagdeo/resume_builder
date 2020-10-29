const li = document.querySelector(".li-dropdown");
const dropdown = document.querySelector(".dropdown");

function liMouseEnter() {
    dropdown.style.display = "block";
    dropdown.style.opacity = "1";
}

function liMouseLeave() {
    dropdown.style.opacity = "0";
    dropdown.style.display = "none";
}
li.addEventListener("mouseenter", liMouseEnter);
li.addEventListener("mouseleave", liMouseLeave);

// burger
const burger = document.querySelector(".burger-box");

function handleBurger() {
    this.classList.toggle("hamburger-active");
}
burger.addEventListener("click", handleBurger);