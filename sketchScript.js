const gridContainer = document.querySelector(".container");

let grid = createGrid(16);
let button = document.querySelector("button");
button.addEventListener("click", resizeGrid);

hue = 0;

function createGrid(size){
    let grid = [];
    for (let i = 0; i < size; i++){
        let row = [];
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let i = 0; i < size; i++){
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.addEventListener("mouseenter", turnColored);
            row.push(squareDiv);
            rowDiv.appendChild(squareDiv);
        }

        grid.push(row);
        gridContainer.appendChild(rowDiv);
    }
    return grid;
}

function destroyGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function turnColored(event){
    event.target.style.backgroundColor = `hsl(${hue}, 100%, 65%)`;
    hue = (hue + 10) % 400;
}

function resizeGrid(event){
    size = Number(prompt("Please enter a number between 1 and 100: "));

    if (isNaN(size)) {
        alert("Invalid selection. Please input a number.");
    } else if (size < 1 || size > 100) {
        alert("Invalid selection. Number must be between 1 and 100.");
    } else {
        destroyGrid();
        createGrid(size);
    }
}
