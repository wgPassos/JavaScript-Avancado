// Iniciando as variáveis
let boards = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;

let symbols = ["o", "x"];

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gameWin = [];
let playerWin = ""

function handleMove (position) {

    if (gameOver) {
        return ;
    }

    if (boards[position] == "") {
        boards[position] = symbols[playerTime];
        playerWin = symbols[playerTime];

        if (isWin()) {
            return "win";
        }

        if (isDraw()){
            return "draw";
        }

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver;
    
}

function isWin () {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (boards[pos1] == boards[pos2] && 
            boards[pos1] == boards[pos3] &&
            boards[pos1] != ""){
            gameWin.push(pos1, pos2, pos3)
            return true;
        }
    }
    return false;
}

function isDraw() {
    for (let i = 0; i < boards.length; i++) {
        console.log("loop empate")
        if (boards[i] === "") {
            console.log(boards[i] + "loop empate")
            return false;
        }
    }
    return true;
}