// Task 3 : Create a new div element with some text content and append it to the body . 

let div = document.createElement('div');
div.innerHTML = "<h1>Welcome To The JavaScript World !!</h1>";
document.body.style.backgroundColor = "blue";
div.style.color = "yellow";
div.style.padding = "15px";
div.style.textAlign = "center";
div.style.letterSpacing = "2px";
document.body.appendChild(div);