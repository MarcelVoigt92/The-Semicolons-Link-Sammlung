function showGrid() {
  let valueCol = document.getElementById("valueCol").value;
  let valueRow = document.getElementById("valueRow").value;
  if (valueCol || valueRow) {
    const clearAll = document.getElementById("output");
    clearAll.innerHTML = "";

    let arrayCol = valueCol.split(" ");
    console.log(arrayCol);
    let arrayRow = valueRow.split(" ");
    console.log(arrayRow);

    for (let i = 0; i < arrayCol.length; i++) {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = "das ist eine Spalte!";
      document.getElementById("output").appendChild(createDiv);
    }
    for (let i = 0; i < arrayRow.length; i++) {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = "das ist eine Reihe!";
      document.getElementById("output").appendChild(createDiv);
    }

    document.getElementById("output").style.display = "grid";
    document.getElementById("output").style.gridTemplateColumns = valueCol;
    document.getElementById("output").style.gridTemplateRows= valueRow;
  }
}
