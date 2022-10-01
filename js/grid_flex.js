function showGridCol() {
  let theValue = document.getElementById("value").value;
  if (theValue) {
    const clearAll = document.getElementById("output");
    clearAll.innerHTML = "";

    let array = theValue.split(" ");
    console.log(array);

    for (let i = 0; i < array.length; i++) {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = "das ist eine Spalte!";
      document.getElementById("output").appendChild(createDiv);
    }

    document.getElementById("output").style.display = "grid";
    document.getElementById("output").style.gridTemplateColumns = theValue;
  }
}
