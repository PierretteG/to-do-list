let button = document.getElementById("save");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let listItems = document.getElementsByTagName("li");




button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
ul.addEventListener("click", addStrikeThrough);

createButtons();

function createButtons() {
    for (let i = listItems.length - 1; i >= 0; i--) {
        let deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        listItems[i].appendChild(deleteButton);
        deleteButton.onclick = deleteItem;
    }
}


function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.appendChild(document.createTextNode(input.value));
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);

    ul.appendChild(li);
    input.value = "";

    deleteButton.onclick = deleteItem;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

function deleteItem() {
	for (let i = listItems.length - 1; i >= 0; i--) {
		this.parentNode.remove()
	}
}

function addStrikeThrough(event) {
    let element = event.target;
    if (element.tagName === 'LI') {
        element.classList.toggle("done");
    }
}