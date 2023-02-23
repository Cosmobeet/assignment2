let coinFlip = Math.round(Math.random(1));
let choice = prompt("Heads or Tails?").toLowerCase();

if (coinFlip == 1) {
  if (choice == "heads") {
    alert("The flip was heads and you chose heads...you win!" + coinFlip);
  } else {
    alert("The flip was heads but you chose tails...you lose!" + coinFlip);
  }
} else if (coinFlip == 0) {
  if (choice == "tails") {
    alert("The flip was tails and you chose tails...you win!" + coinFlip);
  } else {
    alert("The flip was tails but you chose heads...you lose!" + coinFlip);
  }
}
