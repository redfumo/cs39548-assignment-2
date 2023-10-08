// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.
    //let row = document.createElement("tr");
    //document.getElementById("grid").appendChild(row);
    numRows++;
    let row = document.getElementById("grid").insertRow();
    row.id = "row" + numRows;
    row.insertCell();
    
    //console.log(numRows);
    //console.log(row.id);

}

// Add a column
function addC() {
    //alert("Clicked Add Col"); // Replace this line with your code.
    //let col = document.createElement("td");
    //for (let i = 0; i < numRows; i++)   //for each row in the grid
        //document.getElementById("grid").appendChild(col);
    if (numRows != 0) numCols++;
    for (let i = 1; i <= numRows; i++)   //for each row in the grid
        document.getElementById("row" + i).insertCell();    //insert an adjacent cell into the row to make a new col

    console.log(numCols);

}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}