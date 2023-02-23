let firstInput = prompt("Enter the first integer");
let secondInput = prompt("Enter the second integer");

if (firstInput > secondInput) {
  alert("The largest integer is: " + firstInput);
} else if (firstInput < secondInput) {
  alert("The largest integer is: " + secondInput);
} else if (firstInput == secondInput) {
  alert("The integers are equal");
}
