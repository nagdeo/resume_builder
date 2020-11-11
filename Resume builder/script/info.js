// var option = select.options[select.selectedIndex];
const edu = document.querySelector(".education");
const addButtonEdu = document.querySelector(".education .add");
const deleteButtonEdu = document.querySelector(".education .delete");
const addEdu = document.querySelector(".add-education");
const formEdu = addEdu.querySelector("form");
const backEdu = addEdu.querySelector(".back");
const clearEdu = addEdu.querySelector(".clear");
const saveEdu = addEdu.querySelector(".save");
const inputsEdu = addEdu.querySelectorAll("input");
const selectEdu = addEdu.querySelector("select");

const cardsEdu = edu.querySelector(".cards");


let items =  JSON.parse(localStorage.getItem("educationDetail")) || [];
console.log("first",items);
window.addEventListener("load", () => {
    populateCards();
})
function populateCards() {
    let html = "";
    items.forEach(elem => {
        html += `
        <div class="card">
        <div class="title">${elem.course}</div>
        <div class="body">
          <p>Field: <b>${elem.field}</b></p>
          <p>Graduation: <b>${elem.date}</b></p>
          <p><b>${elem.college} ${elem.city} ${elem.state}</b></p>
        </div>
      </div>
        `;
    })
    cardsEdu.innerHTML = html;
}


addButtonEdu.addEventListener("click", () => {
    addEdu.style.transform = "translateX(0)";
    edu.style.overflow = "visible";
})
deleteButtonEdu.addEventListener("click", () => {
    cardsEdu.innerHTML = "";
    localStorage.clear();
    items = [];
    //item = {};
})
backEdu.addEventListener("click", () => {
    addEdu.style.transform = "translateX(150%)";
    edu.style.overflow = "hidden";
})
clearEdu.addEventListener("click", () => {
    //item = {};
    formEdu.reset();
})
saveEdu.addEventListener("click", () => {
    var emptyValue = false;
    let item={};
    inputsEdu.forEach(elem => {
        let key = elem.dataset.for;
        let value = elem.value;
        if (value == "") {
            emptyValue = true;
        }
        item[key] = value;
        console.log(key);
    })
    let option = selectEdu.options[selectEdu.selectedIndex];
    if (option.value == "") {
        emptyValue = true;
    }
    item.course = option.value;
    console.log(item);
    if (!emptyValue) {
        let it=item;
        items.push(item);
        console.log(items);
        let i=items;
        localStorage.setItem("educationDetail", JSON.stringify(i));
        populateCards();
        formEdu.reset();
        backEdu.click();
    } else {
        emptyValue = false;
    }
})
