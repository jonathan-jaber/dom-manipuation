"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element = document.getElementById("characters");
// for (const element of elements){
//     element.style.backgroundColor = "#CCC";
// }
const itemInput = document.querySelector("itemInput");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");
addButton.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = itemInput.value;
    list === null || list === void 0 ? void 0 : list.append(listItem);
});
//# sourceMappingURL=main.js.map