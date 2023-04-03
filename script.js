function getPosition() {
  let elem = document.getElementById("btn");

  var style = elem.currentStyle || window.getComputedStyle(elem);
  // obter estilo descrito no style.css 
  // erro não traz nada
  console.log('style: margin', elem.style.marginTop)
  // obter o estido corrente (currentStyle) ou computado (computedStyle)
  console.log("current or computed style:  margin " + style.margin);
  // obter posição
  var rect = elem.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);

}

/*
1- 

element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

2 - 
var rect = element.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

*/