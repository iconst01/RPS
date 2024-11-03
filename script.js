document.addEventListener("DOMContentLoaded", function () {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  //CHOICES AVAILABLE IN THE GAME
  const choices = ["rock", "paper", "scissors"];

  //EVENT LISTNER FOR THE PLAY BUTTON CLICK
  document.getElementById("playButton").addEventListener("click", function () {
    //USER INPUT, CONVERT TO LOWER CASE SO IT CAN WORK REGARDLES
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    //MAKES SURE USER INPUT IS VALID
    if (!validChoices.includes(userInput)) {
      alert("Please enter rock, paper, or scissors.");
      return;
    }

    //computer answer

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    //DETERMINE THE GAME OUTCOME
    if (userInput === computerChoice) {
      result = "Its a tie!";
      ties++;
    } else if (
      (userInput === "rock" && computerChoice === "scissors") ||
      (userInput === "paper" && computerChoice === "rock") ||
      (userInput === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
      wins++;
    } else {
      result = "Computer wins!";
      losses++;
    }
    //UPDATES THE SCORE
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("ties").innerText = ties;
    //SHOWS THE GAME RESULT & COMPUTER CHOICE
    document.getElementById(
      "result"
    ).innerText = `Computer chose: ${computerChoice}. ${result}`;
  });
});
