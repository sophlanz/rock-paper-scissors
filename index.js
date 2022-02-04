
function computerPlay() {
    const options = ["rock","paper","scissors"]
    let computer =  options[Math.floor(Math.random()*options.length)]
    
    return computer;
}


function round() {
    const computer = computerPlay();
    const moves = document.querySelector('#moves'); 
    const player = moves.options[moves.selectedIndex].value;
    document.getElementById("computer-move").innerText= `The computer's choice: ${computer}.`
    document.getElementById("player-move").innerText= `Your choice: ${player}.`
    if (player == "rock" && computer == "paper") {
       
        document.getElementById("game-results").innerText = `You lose! Paper beats rock!`
    }
    
    if (player == "paper" && computer == "rock") {
        document.getElementById("game-results").innerText = 'You win! Paper beats rock!'
    }
    debugger;
    if (player == "scissors" && computer == "paper") {
        document.getElementById("game-results").innerText ='You win! Scissors beats paper!'
    }
    if (player == "rock" && computer == "scissors") {
        document.getElementById("game-results").innerText = 'You win! Rock beats scissors!'
    }
    if (player == "paper" && computer == "scissors") {
        document.getElementById("game-results").innerText = 'You lose! Scissors beats paper!'
    }
    if (player == "scissors" && computer == "rock") {
        document.getElementById("game-results").innerText = 'You lose! Rock beats scissors!'
    }
    if (player == "rock" && computer == "rock") {
        document.getElementById("game-results").innerText = "We have a tie! Play again!"
    }
    if (player == "paper" && computer == "paper") {
        document.getElementById("game-results").innerText = "We have a tie! Play again!"
    }
    if (player == "scissors" && computer == "scissors") {
        document.getElementById("game-results").innerText = "We have a tie! Play again!"
    }
    
    
}

