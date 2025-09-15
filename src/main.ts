const element = document.getElementById("characters");

// for (const element of elements){
    
//     element.style.backgroundColor = "#CCC";
// }

const itemInput = document.querySelector<HTMLInputElement>("itemInput");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");

addButton.addEventListener("click", () => {

    const listItem = document.createElement("li");
    listItem.textContent = itemInput.value;
    list?.append(listItem);
});