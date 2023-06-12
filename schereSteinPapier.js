'use strict'

function computerPlay() {
    let pcRoll = Math.floor(Math.random() * 3 + 1);
    /*   Computer rollt einen Wert von 1 - 3:
            1 - Schere
            2 - Stein
            3 - Papier
    */
    if (pcRoll == 1) {
        pcRoll = "schere";
    }
    else if (pcRoll == 2) {
        pcRoll = "stein";
    }
    else {
        pcRoll = "papier";
    }
    return pcRoll;
}

function playRound() { /// Funktion um den Wert des Computers mit der Eingabe des Spielers zu vergleichen
    let computerChoice = computerPlay();
    let playerInputInsensitive = prompt("Schere Stein Papier!\nGeben Sie ein von:\nSchere\nStein\nPapier");
    let playerInput = playerInputInsensitive.toLowerCase();
    let won = 0;
    /// Unentschieden:
    if (playerInput == computerChoice) {
        console.log("Unentschieden!");
    }
    /// Spielergewinnbedingungen:
    else if (playerInput == "schere" && computerChoice == "papier") {
        console.log("Du gewinnst! - Schere schneidet Papier!");
        won = won + 1;
    }
    else if (playerInput == "stein" && computerChoice == "schere") {
        console.log("Du gewinnst! - Stein schlägt Schere!");
        won = won + 1;
    }
    else if (playerInput == "papier" && computerChoice == "stein") {
        console.log("Du gewinnst! - Papier umwickelt den Stein!");
        won = won + 1;
    }
    /// Computergewinnbedingungen:
    else if (playerInput == "schere" && computerChoice == "stein") {
        console.log("Du hast verloren! - Stein schlägt Schere!");
        won = won - 1;
    }
    else if (playerInput == "stein" && computerChoice == "papier") {
        console.log("Du hast verloren! - Papier umwickelt den Stein!");
        won = won - 1;
    }
    else if (playerInput == "papier" && computerChoice == "schere") {
        console.log("Du hast verloren! - Schere schneidet Papier!");
        won = won - 1;
    }
    /// Abfangen einer falschen Eingabe:
    else {
        alert("Falsche Eingabe!");
    }
    return won;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        const whoWon = playRound();
        ///console.log(whoWon);
        if (whoWon == 1) { /// Punkt für Spieler
            playerWins = playerWins + 1;
        }
        else if (whoWon == -1) { /// Punkt für Computer
            computerWins = computerWins + 1;
        }
    }

    /// Entscheidung wer gewonnen hat:
    if (playerWins == 5) {
        document.write("Du hast gewonnen! " + playerWins + " - " + computerWins);
        document.write("<br>Noch eine Runde?<br>Einfach game() eingeben für noch eine Runde!<br>(Spiel endet wenn du oder der Computer 5 mal gewonnen hat.)");
    }
    else {
        document.write("Du hast leider verloren. " + computerWins + " - " + playerWins);
        document.write("<br>Noch eine Runde?<br>Einfach game() eingeben für noch eine Runde!<br>(Spiel endet wenn du oder der Computer 5 mal gewonnen hat.)");
    }

}

document.write("Starten Sie ein Spiel Schere-Stein-Papier mithilfe von game()!<br>(Spiel endet wenn du oder der Computer 5 mal gewonnen hat.)");
//game();
