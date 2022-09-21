// Iniciando as variáveis
let boards = ["", "", "", "", "", "", "", "", "",]
let symbols = ["o", "x"];
let playerTime = 0;

function handleMove (position) {

    boards[position] = symbols[playerTime];

    if (playerTime == 0) {
        playerTime = 1;
    } else {
        playerTime = 0;
    }
}
