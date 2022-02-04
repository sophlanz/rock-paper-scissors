
function computerPlay() {
    const options = ["rock","paper","scissors"]
    let computer =  options[Math.floor(Math.random()*options.length)]
    return computer;
}


function round() {
    const computer = computerPlay();
    const moves = document.querySelector('#moves'); 
    const player = moves.options[moves.selectedIndex].value;
    if (player == "rock" && computer == "paper") {
       
        alert ('You loose! Paper beats rock!');
    }
    
    if (player == "paper" && computer == "rock") {
        alert ('You win! Paper beats rock!');
    }
    debugger;
    if (player == "scissors" && computer == "paper") {
        alert ('You win! Scissors beats paper!');
    }
    if (player == "rock" && computer == "scissors") {
        alert ('You win! Rock beats scissors!');
    }
    if (player == "paper" && computer == "scissors") {
        alert ('You lose! Scissors beats paper!');
    }
    if (player == "scissors" && computer == "rock") {
        alert ('You lose! Rock beats scissors!');
    }
    if (player == "rock" && computer == "rock") {
        alert ("We have a tie! Play again!");
    }
    if (player == "paper" && computer == "paper") {
        alert ("We have a tie! Play again!");
    }
    if (player == "scissors" && computer == "scissors") {
        alert ("We have a tie! Play again!");
    }
    
    
}

