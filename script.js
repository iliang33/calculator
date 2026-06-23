const body = document.querySelector("body");

const p = document.createElement("p");

p.textContent = "Hello World!"
p.setAttribute("style", "color: red;");

body.appendChild(p);