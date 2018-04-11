var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

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
