let choices = ["rock", "paper", "scissors"];
let yourchoice = document.getElementById("yourchoice");
let compchoice = document.getElementById("compchoice");
let result = document.getElementById("result");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let playerchoice = "";
let computerchoice = "";
let playerwins = 0;
let computerwins = 0;
function Game(playerchoice){
    computerchoice = choices[Math.floor(Math.random() * 3)];
    if(playerchoice === computerchoice){
        result.textContent = "It's a tie!";
        yourchoice.textContent = `Player choice: ${playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1)}`;
        compchoice.textContent = `Computer choice: ${computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1)}`;
        
    }
    else{
        switch(playerchoice){
            case "rock":
                if(computerchoice === "paper"){
                    result.textContent = "Computer wins!";
                    computerwins++;
                   
                }
                else{
                    result.textContent = "Player wins!";
                    playerwins++;
                }
                break;
            case "paper":
                if(computerchoice === "scissors"){
                    result.textContent = "Computer wins!";
                    computerwins++;
                }
                else{
                    result.textContent = "Player wins!";
                    playerwins++;
                }
                break;
            case "scissors":
                if(computerchoice === "rock"){
                    result.textContent = "Computer wins!";
                    computerwins++;
                }
                else{
                    result.textContent = "Player wins!";
                    playerwins++;
                }
                break;

        }
        yourchoice.textContent = `Player choice: ${playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1)}`;
        compchoice.textContent = `Computer choice: ${computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1)}`;
        document.getElementById("playerwins").textContent = `Player wins: ${playerwins}`;
        document.getElementById("compwins").textContent = `Computer wins: ${computerwins}`;
    }
    
    
}