let ListTxt = document.querySelector("ul");
let button = document.getElementById("AddBtn");

button.onclick = AddElement;

function AddElement(){
  let elementForAdd = document.createElement("li");
  let inputValue = document.getElementById("AddTxt").value;
  let text = document.createTextNode(inputValue);
  elementForAdd.appendChild(text);

 inputValue == "" ? alert("Field is empty!") : document.getElementById("ListTxt").appendChild(elementForAdd);
 document.getElementById("AddTxt").value = "";

 for (let i = 0; i < ListTxt.childNodes.length; i++) {
   ListTxt.childNodes[i].onclick = function(){
     this.remove();
   }
 }


}
