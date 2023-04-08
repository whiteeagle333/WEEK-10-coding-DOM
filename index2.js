// This function adds a new row to an HTML table with data entered in form fields

function addRow() {
  // Get the values entered in form fields

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var skills = document.getElementById("skills").value;
  var website = document.getElementById("website").value;

  // Get the table and insert a new row at the end

  var table = document.getElementById("myTable");
  var newRow = table.insertRow(table.rows.length);

  // Insert new cells into the row and populate them with the data from the form fields

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = skills;
  cell4.innerHTML = website;

  // Create a delete button in the last cell of the row and attach a deleteRow() function to it

  cell5.innerHTML =
    '<button type="button" class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>';

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("skills").value = "";
  document.getElementById("website").value = "";
}

// This function deletes all rows in the HTML table except for the header row

function deleteRows() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

// This function deletes a specific row in the HTML table when the delete button is clicked

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
