// Iniciando as variáveis
let boards = ["", "", "", "", "", "", "", "", "",]
let symbols = ["o", "x"];
let playerTime = 0;

function handleMove (position) {

    if (playerTime == 0) {
        playerTime = 1;
    } else {
        playerTime = 0;
    }
}
