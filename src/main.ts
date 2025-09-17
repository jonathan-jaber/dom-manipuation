const element = document.getElementById("characters");
const output = document.querySelector("#output");
const charButton = document.querySelector("#charButton");
const publisherButton = document.querySelector("#publisherButton");
const itemInput = document.querySelector<HTMLInputElement>("#itemInput")!;

document.addEventListener("DOMContentLoaded", () => {

    // color all the characters <p> items
    
})

charButton.addEventListener("click", () => {
    output.innerHTML = "<div><p>Mario</p>" + "<p>Sonic</p>" + "<p>PacMan</p></div>";
});

publisherButton.addEventListener("click", () => {
    output.innerHTML = "<div><p>Nintendo</p>" + "<p>Sega</p>" + "<p>Namco</p></div>";
});

// for (const element of elements){
    
//     element.style.backgroundColor = "#CCC";
// }

// const itemInput = document.querySelector<HTMLInputElement>("itemInput");
// const addButton = document.querySelector("#addButton");
// const list = document.querySelector("#list");

// addButton.addEventListener("click", () => {

//     const listItem = document.createElement("li");
//     listItem.textContent = itemInput.value;
//     list?.append(listItem);
// });