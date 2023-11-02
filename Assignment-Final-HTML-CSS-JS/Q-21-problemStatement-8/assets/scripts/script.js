var x = 1;
var count = 0;
var items = [];
var initial = 1;
var i = 1;

function handleAddElement() {
  count++;
  console.log(count);
  var item = document.getElementById("inputValue");
  var itemValue = item.value;
  items.push(itemValue);
  console.log(items);
  item.value = "";
}

function handleSubmit() {
  items.map((item) => {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(item));
    document.querySelector("ul").appendChild(listItem);
    document.getElementById("selectedValues").value = "";
  });
}

function handleRemoveElement() {
  var item = document.getElementById("inputValue").value;
  console.log(item);
  var index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
  }

  console.log(items);
  document.getElementById("selectedValues").innerHTML = "";
  items.map((item) => {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(item));
    document.querySelector("ul").appendChild(listItem);
    document.getElementById("selectedValues").value = "";
  });
  var item = document.getElementById("inputValue");
  item.value = "";
}

function handleRemoveAll() {
  items = [];
  console.log(items);
  document.getElementById("selectedValues").innerHTML = "";
  items.map((item) => {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(item));
    document.querySelector("ul").appendChild(listItem);
    document.getElementById("selectedValues").value = "";
  });
}
