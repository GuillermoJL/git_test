//Your JavaScript goes here!

const button = document.querySelector("button");

function getComputerChoice(){
    let weapon="rock";
    const random_number=Math.random();
    if(random_number<1/3){
        weapon="paper";
    }
    else if(random_number<2/3){
        weapon="scissors"
    }
    return weapon;
}

function getHumanChoice(){
    let weapon = prompt("Type \"rock\", \"paper\" or \"scissors\":");
    weapon=weapon.toLowerCase();
    return weapon;
}

function playRound(humanChoice,computerChoice){
    let winner="tie";
    console.log("Your choice: "+humanChoice);
    console.log("Computer choice: "+computerChoice);
    if(humanChoice=="rock"){
        if(computerChoice=="paper"){
            winner="computer";
        }
        else if(computerChoice=="scissors"){
            winner="human";
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            winner="human";
        }
        else if(computerChoice=="scissors"){
            winner="computer";
        }
    }
    else{
        if(computerChoice=="rock"){
            winner="computer";
        }
        else if(computerChoice=="paper"){
            winner="human";
        }
    }
    console.log("The winner of the round is: "+winner);
    return winner;
}

function declareWinner(humanScore,computerScore){
    if(humanScore>computerScore){
        console.log("Congrats! You Won!");
    }
    else if(computerScore>humanScore){
        console.log("Man, you suck. Loser.");
    }
    else{
        console.log("Nobody won. Unacceptable!");
    }
}


let humanScore=0;
let computerScore=0;
const number_of_rounds=5;

for (let round=0;round<number_of_rounds;round++){
    let winner=playRound(getHumanChoice(),getComputerChoice());
    if(winner=="human"){
        humanScore++;
    }
    else if(winner=="computer"){
        computerScore++;
    }
}
declareWinner(humanScore,computerScore);
// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);



// const greeting = "Hello";
// const name = "Chris";
// const sup= greeting + ", " + name;
// console.log(sup); // "Hello, Chris"
// const numbah1=45;
// const numbah2=13;

// const newline = "cat".charAt(0);
// console.log(newline);

// const a = "a";
// const b = ".";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }





// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i=1; i<= answer ; i++){
//   if (i%3 ==0){
//     console.log("Fizz");
//   }
//   if (i%5 ==0){
//     console.log("Buzz");
//   }
//   else if (i%3 != 0 && i%5 != 0){
//     console.log(i);
//   }
// }