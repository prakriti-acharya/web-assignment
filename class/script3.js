var element = document.getElementById("before");
let a = 60;
let b = 40;
element.innerHTML =
  "Before swapping value of a and b are: " + a + " " + "and" + " " + b;
var ele = document.getElementById("after");
a = a + b;
b = a - b;
a = a - b;
ele.innerHTML =
  "After swapping value of a and b becomes:" + a + " " + "and" + " " + b;