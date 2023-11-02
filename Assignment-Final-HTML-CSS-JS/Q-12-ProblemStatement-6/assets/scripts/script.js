
function handleDelete(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  ri.classList.add("removed");
}