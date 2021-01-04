let computerAnswer

function computerPlay() {
    var randnum = Math.floor(Math.random() * 3) + 1
    if (randnum == 1) {
        computerAnswer = "rock".toUpperCase(); }
    else if (randnum == 2) {
        computerAnswer = "paper".toUpperCase();}
    else if (randnum == 3) {
        computerAnswer = "scissors".toUpperCase()
        }
    else {
        computerAnswer = "Enter something else to continue."
    }

        console.log(computerAnswer.toUpperCase());
        console.log(randnum);
}

let playerScore = 0
let computerScore = 0

function selection(playerSelection, computerSelection) {

    for (var i = 0; i < 5; i++) {

    playerAnswer = prompt("Rock, Paper, or Scissors?").toUpperCase()

    computerPlay()

    if (playerAnswer == "ROCK" && computerAnswer == "ROCK") {
        result = "You both picked ROCK! Tie game!"
    }
    else if (playerAnswer == "PAPER" && computerAnswer == "PAPER") {
        result = "You both picked PAPER! Tie game!"
    }
    else if (playerAnswer == "SCISSORS" && computerAnswer == "SCISSORS") {
        result = "You both picked SCISSORS! Tie game!"
    }
    //*************************************** */
    else if (playerAnswer == "PAPER" && computerAnswer == "ROCK") {
        result = "You Win! PAPER BEATS ROCK!"
        playerScore++
    }
    else if (playerAnswer == "PAPER" && computerAnswer == "SCISSORS") {
        result = "You Lose! PAPER LOSES TO SCISSORS!!"
        computerScore++
    }
    //**************************************** */
    else if (playerAnswer == "SCISSORS" && computerAnswer == "PAPER") {
        result = "You Win! SCISSORS BEATS PAPER!!"
        playerScore++
    }
    else if (playerAnswer == "SCISSORS" && computerAnswer == "ROCK") {
        result = "You Lose! SCISSORS LOSES TO ROCK!!"
        computerScore++
    }
    //**************************************** */
    else if (playerAnswer == "ROCK" && computerAnswer == "SCISSORS") {
        result = "You Win! ROCK BEATS SCISSORS!!"
        playerScore++
    }
    else if (playerAnswer == "ROCK" && computerAnswer == "PAPER") {
        result = "You Lose! ROCK LOSES TO PAPER!!"
        computerScore++
    }
    else {
        result = "Invalid, please try again"
    }
    // (playerSelection == "rock" && computerSelection) == "rock" ? "You both chose rock!" :
    // (playerSelection == "rock" && computerSelection) == "paper" ? "You lose! Paper beats rock!" :
    // "Look at function again"
    console.log(result)
    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)

}

    (playerScore > computerScore) ? console.log("You Win!") : 
    (playerScore === computerScore) ? console.log("You both tied! Play again!") : console.log("You didn't win :(. Try again!");
}

const playerSelection = "rock"
const computerSelection = ""
console.log(selection(playerSelection, computerSelection));