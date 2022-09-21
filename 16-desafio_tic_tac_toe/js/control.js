// Iniciando as variáveis
let boards = ["", "", "", "", "", "", "", "", "",]
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
]

function handleMove (position) {

    if (gameOver) {
        return ;
    }

    if (boards[position] == "") {
        boards[position] = symbols[playerTime];

        gameOver = isWin();

        if (playerTime == 0) {
            playerTime = 1;
        } else {
            playerTime = 0;
        }
    }
    
}

function isWin () {

    // winStates.forEach((states => {

    //     console.log(states);
    //     let seq = states;

    //     let pos1 = seq[0];

    // })
    
    for (let i = 0; i < winStates.length; i++) {
        console.log(winStates[i]);

        let seq = winStates[i];
        console.log(winStates[0])

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (boards[pos1] == boards[pos2] && boards[pos1] == boards[pos3] && boards[pos1] != "") {
            return true;
        }
    }
}
