const li = document.querySelector(".li-dropdown");
const dropdown = document.querySelector(".dropdown");

function liMouseEnter() {
    this.style.minHeight = "300px";
    dropdown.style.display = "block";
    dropdown.style.opacity = "1";
}

function liMouseLeave() {
    this.style.minHeight = "fit-content";
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