var selectedRow = null;

// after clicking submit
function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

// reading form data entered by user
function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["email"] = document.getElementById("email").value;
  return formData;
}

// adding data to table
function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<a class="Edit-btn" onClick="onEdit(this)">Edit</a>
                       <a class="Delete-btn" onClick="onDelete(this)">Delete</a>`;
}

// resetting form after submit
function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  selectedRow = null;
}

// getting data back into form after clicking edit
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
}
// Updating edited record in table
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.email;
}

// Deleting record from table
function onDelete(td) {
  row = td.parentElement.parentElement;
  document.getElementById("employeeList").deleteRow(row.rowIndex);
  resetForm();
}
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
