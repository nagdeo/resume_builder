const addEducation = document.querySelector(".add-education");

window.addEventListener("load", populateEducation);

function deleteEducationHandler() {
    localStorage.clear();
    let ul = document.querySelector(".education ul");
    ul.innerHTML = "";
}

function addEducationButtonHandler() {
    let html = `<form onsubmit="addEducationInputHandler()"><input type="text"></input> <button>Add</button>`;
    addEducation.innerHTML = html;
}

function addEducationInputHandler() {
    let value = addEducation.querySelector("input").value;
    let html = `<div class="btn" onclick="addEducationButtonHandler()">Add Education <span>+</span></div>`;
    addEducation.innerHTML = html;
    if (!value) return;
    value = value.charAt(0).toUpperCase() + value.slice(1);
    let ul = document.querySelector(".education ul");
    let education = JSON.parse(localStorage.getItem("education")) || [];
    let child = `<li><p>${value}</p></li>`;
    education.push(child);
    ul.innerHTML += child;
    localStorage.setItem("education", JSON.stringify(education));
}
function populateEducation() {
    let ul = document.querySelector(".education ul");
    let education = JSON.parse(localStorage.getItem("education")) || [];
    ul.innerHTML = education.join("");
}