console.log("helloworld");

function getcomputerchoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber > 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getcomputerchoice());

function gethumancchoice() {
  const humanchoice = prompt("rock, paper, or scissors");
  return humanchoice;
}
console.log(gethumancchoice());

let computerchoice = 0;
let humanchoice = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("it is a tie!");
    return;
  }
  if (humanChoice === "rock" && computerChoice === "scissors")
    //
    (humanChoice === "paper" && computerChoice === "rock")(
      //
      humanchoice === "scissors" && computerChoice === "paper"
    );
  {
    humanscore++;
    console.log("you won!) ${humanchoice} beats ${computerChoice}");
  }
  computerChoice++;
  console.log("you lost! ${computerChoice} beats ${humanChoice");
}

function playgame() {
  let computerchoice = 0;
  let humanChoice = 0;
  let round = 1;
  round <= 5;
  console.log(round);

  const result = playRound();
  if (round === "computerChoice") {
    computerchoice++;
    console.log("computer won");
  } else if (round === "humanChoice") {
    humanChoice++;
    console.log("you won!");
  } else {
    console.log("this round is a tie!");
  }
  round++;

  console.log("final score");
  console.log("human", humanchoice);
  console.log("computer", computerchoice);

  if (humanchoice > computerchoice) {
    return "you won the game!";
  } else if (computerchoice > humanchoice) {
    return "computer won the game!";
  } else {
    return "the game is a tie!";
  }
}
