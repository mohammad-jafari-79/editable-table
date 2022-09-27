// check browser width
// first time open check
var browserWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var checkResult = document.getElementById("chechResult");
if (browserWidth > 1140) {
  checkResult.innerHTML = "<b style='color: green;'>OK</b>✅";
} else {
  checkResult.style.color = "red";
  checkResult.innerHTML =
    "less than <b>1140px</b>, in edit mode you have scorll x";
}
// check width on change
window.addEventListener("resize", function () {
  var browserWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var checkResult = document.getElementById("chechResult");
  if (browserWidth > 1140) {
    checkResult.innerHTML = "<b style='color: green;'>OK</b>✅";
  } else {
    checkResult.style.color = "red";
    checkResult.innerHTML =
      "less than <b>1140pxpx</b>, in edit mode you have scorll x";
  }
});

let sumbitBtn = document.getElementById("sumbitBtn");
sumbitBtn.addEventListener("click", print);
var Index = 3;
var Index1 = 3;
function print() {
  let inputs = document.getElementsByTagName("input");
  let table = document.getElementById("table");
  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  tr.id = `${Index++}`;
  for (var j = 0; j < inputs.length; j++) {
    let text = document.createTextNode(inputs[j].value);
    let td = document.createElement("td");
    let p = document.createElement("p");
    p.appendChild(text);
    td.appendChild(p);
    tr.appendChild(td);
  }
  let button = document.createElement("button");
  let td = document.createElement("td");
  button.innerHTML = "Delete";
  button.id = `${Index1++}`;
  td.appendChild(button);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  button.addEventListener("click", function () {
    Delet(button.id);
  });
}

let edit_button = document.getElementById("edit_button");
edit_button.addEventListener("click", edith_function);
function edith_function() {
  sumbitBtn.disabled = true;
  let j = 1;
  let td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    if (i == 7 * j - 1) {
      j++;
      continue;
    } else {
      let input = document.createElement("input");
      td[i].appendChild(input);
      input.value = td[i].firstElementChild.innerHTML;
      td[i].removeChild(td[i].firstElementChild);
    }
  }
  let th = document.getElementsByTagName("th");
  let delet = document.getElementById("delete");
  let finish_editing_button = document.createElement("button");
  let text = document.createTextNode("Finish Edit");
  finish_editing_button.appendChild(text);
  finish_editing_button.style.width = "100%";
  finish_editing_button.addEventListener("click", finish_editing);
  th[6].removeChild(th[6].firstChild);
  th[6].insertBefore(finish_editing_button, delet);
}

function finish_editing() {
  sumbitBtn.disabled = false;
  let td = document.getElementsByTagName("td");
  let inputs = document.getElementsByTagName("input");
  let j = 1;
  for (let i = 0; i < td.length; i++) {
    if (i == 7 * j - 1) {
      j++;
      continue;
    } else {
      let p = document.createElement("p");
      let val = inputs[6].value;
      let text = document.createTextNode(val);
      p.appendChild(text);
      td[i].appendChild(p);
      td[i].removeChild(td[i].firstElementChild);
    }
  }
  let th = document.getElementsByTagName("th");
  let editing_button = document.createElement("button");
  let text = document.createTextNode("edit");
  editing_button.appendChild(text);
  editing_button.id = "edit_button";
  th[6].removeChild(th[6].firstElementChild);
  let delet = document.getElementById("delete");
  th[6].insertBefore(editing_button, delet);
  editing_button.addEventListener("click", edith_function);
}

function Delet(id) {
  let tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    if (tr[i].id === id) {
      document.getElementById(`${tr[i].id}`).remove();
    }
  }
}
