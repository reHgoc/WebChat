let ListTxt = document.querySelector("ul");
let button = document.getElementById("AddBtn");
let li = null;

button.onclick = AddElement;
li.onclick = RemoveElement;

function AddElement(){
  let elementForAdd = document.createElement("li");
  let inputValue = document.getElementById("AddTxt").value;
  let text = document.createTextNode(inputValue);
  elementForAdd.appendChild(text);

 inputValue == "" ? alert("Field is empty!") : document.getElementById("ListTxt").appendChild(elementForAdd);
 document.getElementById("AddTxt").value = "";
 for(let i; i < ListTxt.childNodes.length; i++){
   if(ListTxt.childNodes[i].tagName == "li"){
     li = ListTxt.childNodes[i];
   }
 }
}
//не получается сделать ремув
function RemoveElement(){
  alert(li);
}
