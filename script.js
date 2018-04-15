var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];

console.log(_.without(array,3));

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var todoList = document.getElementById("todo-list");

// change background
function setGradient() {
	todoList.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addSpanToLi(li);
	li.onclick = function(){
		this.classList.toggle("done");
	};
	input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// add '-' to list-item
function addSpanToLi(ele){
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	ele.appendChild(span);
	span.onclick = function(){
		this.parentElement.style.display = 'none';
	};
}

var lis = document.querySelectorAll("li");

lis.forEach(function(element){
	addSpanToLi(element);
	element.onclick = function(){
		this.classList.toggle("done");
	};
});
