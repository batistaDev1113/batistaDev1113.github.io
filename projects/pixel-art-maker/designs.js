// Select color input
let color = document.getElementById("colorPicker").value;

// Select size input
let cellHeight = document.getElementById("inputHeight").value;
let cellWidth = document.getElementById("inputWidth").value;

// When size is submitted by the user, call makeGrid()
let btn = document
  .getElementById("submit")
  .addEventListener("click", function(e) {
    e.preventDefault();

    cellHeight = document.getElementById("inputHeight").value;
    cellWidth = document.getElementById("inputWidth").value;
    document.getElementById('reset').style.visibility = "visible";
    makeGrid(cellHeight, cellWidth);
  });

//makeGrid function for creating table grid

function makeGrid(rowCells, colCells) {
  let canvas = document.getElementById("pixelCanvas");

  // Your code goes here
  for (let i = 0; i < rowCells; i++) {
    let row = document.createElement("tr");
    canvas.appendChild(row).innerHTML;

    for (let x = 0; x < colCells; x++) {
      let col = document.createElement("td");
      col.setAttribute("class", "data");
      row.appendChild(col);
    }
  }

  let clicked = document.getElementsByClassName("data");
  for (let i = 0; i < clicked.length; i++) {
    let newClick = clicked[i];
    newClick.addEventListener("click", function(e) {
      let newColor = document.getElementById("colorPicker").value;
      newClick.style.backgroundColor = newColor;
    });
  } // function ends here
}

//reset the grid
function gridReset() {
  document.getElementById("submit").disabled = false;
  let rmRow = document.getElementById("pixelCanvas");
  while (rmRow.firstChild) {
    rmRow.removeChild(rmRow.firstChild);
  }

  document.getElementById("colorPicker").value = "#000000";
  document.getElementById('reset').style.visibility = "hidden";
}
