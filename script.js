// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows++;
    let row = document.getElementById("grid").insertRow();
    row.id = "row" + numRows;

    //if this is the very first row, also add a column so that a cell will appear
    if (numCols == 0 && numRows == 1) {
        cell = document.createElement("td");    //create a new cell
        cell.setAttribute("onclick", "this.style.backgroundColor = colorSelected;"); //set the cell to change color on click
        document.getElementById("row1").appendChild(cell);  //append the cell to the end of the row
        numCols++;
    }
    //add cells based on the amount of current columns
    else {
        for (let i = 1; i <= numCols; i++) {  //for each column in the grid 
            cell = document.createElement("td");    //create a new cell
            cell.setAttribute("onclick", "this.style.backgroundColor = colorSelected;"); //set the cell to change color on click
            document.getElementById("row" + numRows).appendChild(cell); //append the cell to the end of the row
        }
    }
}

// Add a column
function addC() {
    //only add a new column if the number of rows is not 0
    if (numRows != 0) numCols++;
    for (let i = 1; i <= numRows; i++) {   //for each row in the grid
        cell = document.createElement("td");    //create a new cell
        cell.setAttribute("onclick", "this.style.backgroundColor = colorSelected;");    //set the cell to change color on click
        document.getElementById("row" + i).appendChild(cell); //append the cell to the end of the row
    }
}

// Remove a row
function removeR() {
    //only works if there is at least one row
    if (numRows != 0) {
        document.getElementById("grid").deleteRow(numRows-1);   //delete the last row
        numRows--;
    }
}

// Remove a column
function removeC() {
    //only works if there is at least one column
    if (numCols != 0) {
        for (let i = 1; i <= numRows; i++)   //for each row in the grid
            document.getElementById("row" + i).deleteCell(numCols-1);    //delete the last cell in the row
        numCols--;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    let cells = document.querySelectorAll("td");    //get all grid cells
    for (let i = 0; i < cells.length; i++) {    //for each grid cell
        //if the cell is not filled in with one of the colors, it is uncolored
        if (cells[i].style.backgroundColor != "red" && cells[i].style.backgroundColor != "blue"
            && cells[i].style.backgroundColor != "green" && cells[i].style.backgroundColor != "yellow") {
                cells[i].style.backgroundColor = colorSelected; //fill it with the selected color
        }
    }
}

// Fill all cells
function fillAll(){
    let cells = document.querySelectorAll("td");    //get all grid cells
    for (let i = 0; i < cells.length; i++) {    //for each grid cell
        cells[i].style.backgroundColor = colorSelected; //fill it with the selected color
    }
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll("td");    //get all grid cells
    for (let i = 0; i < cells.length; i++) {    //for each grid cell
        cells[i].style.backgroundColor = "white"; //fill it with white
    }
}