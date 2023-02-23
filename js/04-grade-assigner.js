let userNumber = prompt("Enter a number between 1 and 100");

if (userNumber > 100) {
  alert("Only numbers between 1 and 100 are allowed");
} else if (userNumber < 0) {
  alert("Only numbers between 1 and 100 are allowed");
} else {
  switch (true) {
    case userNumber >= 90:
      alert("A");
      break;
    case 89 >= userNumber >= 80:
      alert("B");
      break;
    case 79 >= userNumber >= 70:
      alert("C");
      break;
    case 69 >= userNumber >= 60:
      alert("D");
      break;
    case 60 > userNumber:
      alert("F");
      break;
  }
}
