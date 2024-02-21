const gridContainer = document.querySelector(".container");

let grid = createGrid();

function createGrid(){
    let grid = [];
    for (let i = 0; i < 16; i++){
        let row = [];
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let i = 0; i < 16; i++){
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.addEventListener("mouseenter", turnBlue);
            row.push(squareDiv);
            rowDiv.appendChild(squareDiv);
        }

        grid.push(row);
        gridContainer.appendChild(rowDiv);
    }
    return grid;
}

function turnBlue(event){
    event.target.style.backgroundColor = "blue";
}
