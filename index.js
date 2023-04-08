function addRow() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;

  var table = document.getElementById("myTable");
  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = website;
  cell4.innerHTML =
    '<button type="button" class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>';

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
}

function deleteRows() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
