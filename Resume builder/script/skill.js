const skillCards = document.querySelector(".skill .cards");
const addSkill = document.querySelector(".skill .add");
const skillInput = document.querySelector(".skill input");
let items = JSON.parse(localStorage.getItem("skillDetail")) || [];
window.addEventListener("load", () => {
    populateCards();
})

function populateCards() {
    let html = items.map((item, i) => {
        return `
        <div class="card">
        <div class="text">${item}</div>
        <div class="delete">
            <i data-id=${i} class="fas fa-times"></i>
        </div>
    </div>
        `;
    }).join(" ");
    skillCards.innerHTML = html;
}

addSkill.addEventListener("click", () => {
    if (addSkill.className.includes("submit")) {
        let value = skillInput.value;
        if (value != "") {
            items.push(value);
            localStorage.setItem("skillDetail", JSON.stringify(items));
            populateCards();
        }
    } else {
        skillInput.focus();
    }
    skillInput.value = "";
    skillInput.classList.toggle("expand-input");
    addSkill.classList.toggle("submit");
})

skillCards.addEventListener("click", (e) => {
    if (e.target.matches("i")) {
        let Uid = e.target.dataset.id;
        items.splice(Uid, 1);
        localStorage.setItem("skillDetail", JSON.stringify(items));
        populateCards();
    }
})