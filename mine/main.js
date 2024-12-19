const input = document.getElementById("calculate");
const aC = document.getElementById("ac");
const del = document.getElementById("del");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const plus = document.getElementById("plus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const equal = document.getElementById("equal");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const input1 = document.getElementById("toggleBetween");
const cal = document.getElementById("calculator");
const percentage = document.getElementById("percentage")
one.addEventListener("click", (e) => {
  input.value += "1";
});
two.addEventListener("click", (e) => {
  input.value += "2";
});
three.addEventListener("click", (e) => {
  input.value += "3";
});
four.addEventListener("click", (e) => {
  input.value += "4";
});
six.addEventListener("click", (e) => {
  input.value += "6";
});
seven.addEventListener("click", (e) => {
  input.value += "7";
});
eight.addEventListener("click", (e) => {
  input.value += "8";
});
five.addEventListener("click", (e) => {
  input.value += "5";
});
zero.addEventListener("click", (e) => {
  input.value += "0";
});
nine.addEventListener("click", (e) => {
  input.value += "9";
});
divide.addEventListener("click", (e) => {
  input.value += "/";
});
decimal.addEventListener("click", (e) => {
  input.value += ".";
});
multiply.addEventListener("click", (e) => {
  input.value += "*";
});
plus.addEventListener("click", (e) => {
  input.value += "+";
});
aC.addEventListener("click", (e) => {
  input.value = "";
});
equal.addEventListener("click", (e) => {
  let ex = input.value
  // input.value += "+";
  input.value = eval(ex)
  // eval(ex)
});
minus.addEventListener("click", (e) => {
  input.value += "-";
});
del.addEventListener("click", (e) => {
  let di = input.value 
  input.value = di.slice(0, di.length-1)
  // input.value = "";
});
percentage.addEventListener("click", (e) => {
  let ex = input.value
  input.value = eval(ex)/100
});
input1.addEventListener("change", function () {
  if (this.checked) {
    // document.body.classList.add('dark-mode');
    cal.classList.add("dark-mode");
  } else {
    // document.body.classList.remove('dark-mode');
    cal.classList.remove("dark-mode");
  }
});
