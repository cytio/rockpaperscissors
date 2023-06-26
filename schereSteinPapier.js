'use strict'

document.addEventListener('DOMContentLoaded', geladen); /// Das Dokument wird vollständig geladen bevor allem.


function computerPlay() {
    let pcRoll = Math.floor(Math.random() * 3 + 1);
    /*   Computer rollt einen Wert von 1 - 3:
            1 - Schere
            2 - Stein
            3 - Papier
    */

    /// b.) Anzeige was der Computer spielt:
    const computerHand = document.getElementById('computer');

    if (pcRoll == 1) {
        pcRoll = "schere";
        computerHand.innerHTML = 'Computer <i class="far fa-hand-scissors" aria-hidden="true"></i>';
    }
    else if (pcRoll == 2) {
        pcRoll = "stein";
        computerHand.innerHTML = 'Computer <i class="far fa-hand-rock" aria-hidden="true"></i>';
    }
    else {
        pcRoll = "papier";
        computerHand.innerHTML = 'Computer <i class="far fa-hand-paper" aria-hidden="true"></i>';
    }
    return pcRoll;
}

function playRound(playerChoice) { /// Funktion um den Wert des Computers mit der Eingabe des Spielers zu vergleichen
    const gameInfo = document.getElementById('info'); /// 4.) Infotext Element wird hereingeholt.
    let computerChoice = computerPlay();
    let playerInputInsensitive = playerChoice //prompt("Schere Stein Papier!\nGeben Sie ein von:\nSchere\nStein\nPapier");
    let playerInput = playerInputInsensitive.toLowerCase();
    let won = 0;
    /// Unentschieden:
    if (playerInput == computerChoice) {
        gameInfo.textContent = "Unentschieden!";
    }
    /// Spielergewinnbedingungen:
    else if (playerInput == "schere" && computerChoice == "papier") {
        gameInfo.textContent = "Du gewinnst! - Schere schneidet Papier!";
        won = won + 1;
    }
    else if (playerInput == "stein" && computerChoice == "schere") {
        gameInfo.textContent = "Du gewinnst! - Stein schlägt Schere!";
        won = won + 1;
    }
    else if (playerInput == "papier" && computerChoice == "stein") {
        gameInfo.textContent = "Du gewinnst! - Papier umwickelt den Stein!";
        won = won + 1;
    }
    /// Computergewinnbedingungen:
    else if (playerInput == "schere" && computerChoice == "stein") {
        gameInfo.textContent = "Du hast verloren! - Stein schlägt Schere!";
        won = won - 1;
    }
    else if (playerInput == "stein" && computerChoice == "papier") {
        gameInfo.textContent = "Du hast verloren! - Papier umwickelt den Stein!";
        won = won - 1;
    }
    else if (playerInput == "papier" && computerChoice == "schere") {
        gameInfo.textContent = "Du hast verloren! - Schere schneidet Papier!";
        won = won - 1;
    }
    /// Abfangen einer falschen Eingabe:
    else {
        alert("Falsche Eingabe!");
    }
    return won;
}

function geladen() {
    let playerWins = 0;
    let computerWins = 0;
    let whoWon = 0;

    /// a.) Scoreboard wird übergeben:
    const playerScore = document.getElementById('score');
    const computerScore = document.getElementById('cscore');
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    /// e.) Resetbutton:
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => {
        playerWins = 0;
        computerWins = 0;
        whoWon = 0;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
    });


    /// c.) Icons für die Spielmöglichkeiten:
    const playerRock = document.getElementById('rock');
    const playerPaper = document.getElementById('paper');
    const playerScissors = document.getElementById('scissors');


    playerRock.addEventListener('click', () => {
        whoWon = playRound('stein')
        if (whoWon == 1) { /// Punkt für Spieler
            playerWins = playerWins + 1;
            playerScore.textContent = playerWins;
            playerWon(playerWins);
        }
        else if (whoWon == -1) { /// Punkt für Computer
            computerWins = computerWins + 1;
            computerScore.textContent = computerWins;
            computerWon(computerWins);
        }

    });
    playerPaper.addEventListener('click', () => {
        whoWon = playRound('papier')
        if (whoWon == 1) { /// Punkt für Spieler
            playerWins = playerWins + 1;
            playerScore.textContent = playerWins;
            playerWon(playerWins);
        }
        else if (whoWon == -1) { /// Punkt für Computer
            computerWins = computerWins + 1;
            computerScore.textContent = computerWins;
            computerWon(computerWins);
        }

    });
    playerScissors.addEventListener('click', () => {
        whoWon = playRound('schere')
        if (whoWon == 1) { /// Punkt für Spieler
            playerWins = playerWins + 1;
            playerScore.textContent = playerWins;
            playerWon(playerWins);
        }
        else if (whoWon == -1) { /// Punkt für Computer
            computerWins = computerWins + 1;
            computerScore.textContent = computerWins;
            computerWon(computerWins);
        }

    });

    /// Spieler hat gewonnen:
    function playerWon() {
        const gameInfo = document.getElementById('info');
        if (playerWins >= 5) {
            gameInfo.textContent = "You win!";
            gameInfo.style.backgroundColor = "green";
            setTimeout(() => {
                playerWins = 0;
                computerWins = 0;
                whoWon = 0;
                playerScore.textContent = playerWins;
                computerScore.textContent = computerWins;;
                gameInfo.textContent = ""; 
                gameInfo.style.backgroundColor = "lightblue";
            }, 2000)
        }
    }

    /// Computer hat gewonnen:
    function computerWon() {
        const gameInfo = document.getElementById('info');
        if (computerWins == 5) {
            gameInfo.textContent = "You lose!";
            gameInfo.style.backgroundColor = "red";
            setTimeout(() => {
                playerWins = 0;
                computerWins = 0;
                whoWon = 0;
                playerScore.textContent = playerWins;
                computerScore.textContent = computerWins;
                gameInfo.textContent = "";    
                gameInfo.style.backgroundColor = "lightblue";
            }, 2000)
        }
    }
}
