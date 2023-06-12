'use strict'

function computerPlay() {
    return Math.floor(Math.random() * 3 + 1);
    /*   Computer rollt einen Wert von 1 - 3:
            1 - Schere
            2 - Stein
            3 - Papier
    */
}

function playRound() { /// Funktion um den Wert des Computers mit der Eingabe des Spielers zu vergleichen
    let computerChoice = computerPlay();
    let playerInput = parseInt(prompt("Schere Stein Papier!\nGeben Sie eine Ziffer ein von:\n1 - Schere\n2 - Stein\n3 - Papier"));
    let won = 0;
    /// Unentschieden:
    if (playerInput == computerChoice) {
        console.log("Unentschieden!");
    }
    /// Spielergewinnbedingungen:
    else if (playerInput == 1 && computerChoice == 3){
        console.log("Du gewinnst! - Schere schneidet Papier!");
        won = won + 1;
    }
    else if (playerInput == 2 && computerChoice == 1){ 
        console.log("Du gewinnst! - Stein schlägt Schere!");
        won = won + 1;
    }
    else if (playerInput == 3 && computerChoice == 2){
        console.log("Du gewinnst! - Papier umwickelt den Stein!");
        won = won + 1;
    }
    /// Computergewinnbedingungen:
    else if (playerInput == 1 && computerChoice == 2){
        console.log("Du hast verloren! - Stein schlägt Schere!");
        won = won - 1;
    }
    else if (playerInput == 2 && computerChoice == 3){ 
        console.log("Du hast verloren! - Papier umwickelt den Stein!");
        won = won - 1;
    }
    else if (playerInput == 3 && computerChoice == 1){
        console.log("Du hast verloren! - Schere schneidet Papier!");
        won = won - 1;
    }
    else {
        alert ("Falsche Eingabe!");
    }
    return won;
}

function game() {
    let won = 0;
    for (let i = 0; i < 5; i++){  
        const whoWon = playRound();
        console.log(whoWon);
        if (whoWon == 1){ /// Spielerpunkt wenn gewonnen
            won = won + 1;
        }
        else if (whoWon == -1){ /// Punkteabzug wenn verloren
            won = won - 1;
        }
    }
    console.log("final score: " + won);

    /// Entscheidung wer gewonnen hat:
    if (won >= 1) {
        document.write("Du hast gewonnen!");
    }
    else if (won <= -1){
        document.write("Du hast leider verloren.");
    }
    else {
        document.write("Unentschieden.")
    }
    
}


//game();
