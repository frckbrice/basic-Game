const play = document.querySelector("#play");
const restart = document.querySelector("#restart");

play.style.cursor = 'pointer';
restart.style.cursor = "pointer";

const randNumber = Math.floor(Math.random() * 100) + 1;
console.log(randNumber);

let attemptsValue = 5;

//add events
play.addEventListener("click", managerFn);
restart.addEventListener("click", restartFnt);

// to fix the number
let useNumber = randNumber;

// function to do the task
function gamingFn() {
  const guessing = parseInt(document.getElementById("numbers").value);
  return guessing === useNumber;
}

function restartFn() {
  document.querySelector("#numbers").value = "";
}

function restartFnt() {
  restartFn();
  document.querySelector(".win-or-lose").textContent = "";
}

//function manager
function managerFn() {
  let check = gamingFn();
  if (check) {
    document.querySelector(".win-or-lose").textContent =
      "Congratulation, You Win! Continue playing";
    attemptsValue = 5;
  } else {
    console.log(check);
    document.querySelector(".win-or-lose").textContent =
      "Wrong answer! Try again";
    attemptsValue -= 1;
    document.querySelector(".meterdisplay").textContent = attemptsValue;

    if (attemptsValue <= 0) {
      attemptsValue = 5;
      play.style.cursor = "not-allowed";
      console.log(attemptsValue);
      document.querySelector(".meterdisplay").textContent = '5';
      document.querySelector(".win-or-lose").textContent = "You lose!";
      
    }
  }
}
